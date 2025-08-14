// Load environment variables - .env.local for development, Railway env vars for production
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '.env.local' });
}
const express = require('express');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 8081;
const fs = require('fs');

// Increase the body size limit to 50MB (adjust as needed)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Debug middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Serve static files with proper MIME types (Railway compatible)
app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
    console.log(`Serving static file: ${filePath}`);
  }
}));



// Replicate/Veo-3 API endpoints
app.post('/api/replicate/create', async (req, res) => {
  if (!process.env.REPLICATE_API_TOKEN) {
    return res.status(500).json({ error: 'Replicate API token not configured' });
  }

  try {
    const response = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        version: "838c69a013a666f41312ba018c1ae55a2807f27c109a9cb93b22a45f207ad918",
        input: req.body.input
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Replicate API Error:', errorBody);
      return res.status(response.status).json({ 
        error: 'Replicate API Error', 
        details: errorBody 
      });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in Replicate create proxy:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
});

app.get('/api/replicate/status/:predictionId', async (req, res) => {
  if (!process.env.REPLICATE_API_TOKEN) {
    return res.status(500).json({ error: 'Replicate API token not configured' });
  }

  try {
    const { predictionId } = req.params;
    const response = await fetch(`https://api.replicate.com/v1/predictions/${predictionId}`, {
      headers: {
        'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Replicate Status API Error:', errorBody);
      return res.status(response.status).json({ 
        error: 'Replicate Status API Error', 
        details: errorBody 
      });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in Replicate status proxy:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
});

// Seedance API endpoints
app.post('/api/seedance/create', async (req, res) => {
  if (!process.env.REPLICATE_API_TOKEN) {
    return res.status(500).json({ error: 'Replicate API token not configured' });
  }

  try {
    const generationId = req.body.generationId; // Client should provide this
    
    // Send initial progress
    if (generationId) {
      broadcastProgress(generationId, { 
        stage: 'creating', 
        progress: 10, 
        message: 'Starting video generation...' 
      });
    }
    
    const response = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        version: "5fe042776269a7262e69b14f0b835b88b8e5eff9f990cadf31b8f984ed0419ad",
        input: req.body.input
      })
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Seedance API Error:', errorBody);
      
      if (generationId) {
        broadcastProgress(generationId, { 
          stage: 'error', 
          progress: 0, 
          message: 'Video generation failed',
          error: errorBody
        });
      }
      
      return res.status(response.status).json({ 
        error: 'Seedance API Error', 
        details: errorBody 
      });
    }

    const data = await response.json();
    
    // Send progress update for successful creation
    if (generationId) {
      broadcastProgress(generationId, { 
        stage: 'processing', 
        progress: 25, 
        message: 'Video generation in progress...' 
      });
    }
    
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in Seedance create proxy:', error);
    
    const generationId = req.body.generationId;
    if (generationId) {
      broadcastProgress(generationId, { 
        stage: 'error', 
        progress: 0, 
        message: 'Internal server error',
        error: error.message
      });
    }
    
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
});

app.get('/api/seedance/status/:predictionId', async (req, res) => {
  if (!process.env.REPLICATE_API_TOKEN) {
    return res.status(500).json({ error: 'Replicate API token not configured' });
  }

  try {
    const { predictionId } = req.params;
    const { generationId } = req.query; // Optional generation ID for progress updates
    
    const response = await fetch(`https://api.replicate.com/v1/predictions/${predictionId}`, {
      headers: {
        'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Seedance Status API Error:', errorBody);
      return res.status(response.status).json({ 
        error: 'Seedance Status API Error', 
        details: errorBody 
      });
    }

    const data = await response.json();
    
    // Send progress updates via WebSocket
    if (generationId && data.status) {
      let progress = 25;
      let message = 'Processing video...';
      
      switch (data.status) {
        case 'starting':
          progress = 30;
          message = 'Initializing video generation...';
          break;
        case 'processing':
          progress = 60;
          message = 'Generating video frames...';
          break;
        case 'succeeded':
          progress = 100;
          message = 'Video generation complete!';
          break;
        case 'failed':
          progress = 0;
          message = 'Video generation failed';
          break;
      }
      
      broadcastProgress(generationId, { 
        stage: data.status, 
        progress, 
        message,
        predictionId 
      });
    }
    
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in Seedance status proxy:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
});

// Firebase Storage image proxy to avoid CORS issues
app.post('/api/firebase-image', async (req, res) => {
  try {
    const { imageUrl } = req.body;
    
    if (!imageUrl) {
      return res.status(400).json({ error: 'Image URL is required' });
    }
    
    // Fetch the image from Firebase Storage
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
      return res.status(response.status).json({ 
        error: 'Failed to fetch image from Firebase Storage',
        status: response.status 
      });
    }
    
    // Convert to buffer then base64
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    
    res.status(200).json({ base64 });
  } catch (error) {
    console.error('Error fetching Firebase image:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
});

// OpenAI GPT-5 Responses API endpoint
app.post('/api/openai', async (req, res) => {
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key not configured' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('OpenAI GPT-5 API Error:', errorBody);
      return res.status(response.status).json({ 
        error: 'OpenAI GPT-5 API Error', 
        details: errorBody 
      });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in OpenAI GPT-5 proxy:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
});

// Serve index.html for all other routes (SPA support) - but not for assets
app.get('*', (req, res) => {
  // Don't serve index.html for asset requests
  if (req.path.startsWith('/assets/') || req.path.match(/\.(js|css|png|jpg|svg)$/)) {
    return res.status(404).json({ error: 'Asset not found' });
  }
  
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  
  // Check if index.html exists
  if (require('fs').existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(500).send('Build files not found. Please run npm run build');
  }
});

// WebSocket server for real-time progress updates
const wss = new WebSocket.Server({ server });
const progressClients = new Map(); // Map of generation IDs to WebSocket clients

wss.on('connection', (ws, req) => {
  console.log('WebSocket client connected');
  
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      if (data.type === 'subscribe' && data.generationId) {
        progressClients.set(data.generationId, ws);
        console.log(`Client subscribed to generation: ${data.generationId}`);
      }
    } catch (error) {
      console.error('WebSocket message error:', error);
    }
  });
  
  ws.on('close', () => {
    // Remove client from all subscriptions
    for (const [generationId, client] of progressClients.entries()) {
      if (client === ws) {
        progressClients.delete(generationId);
        console.log(`Client unsubscribed from generation: ${generationId}`);
      }
    }
    console.log('WebSocket client disconnected');
  });
});

// Helper function to broadcast progress updates
function broadcastProgress(generationId, progress) {
  const client = progressClients.get(generationId);
  if (client && client.readyState === WebSocket.OPEN) {
    client.send(JSON.stringify({ type: 'progress', ...progress }));
  }
}

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`WebSocket server running on port ${PORT}`);
  
  // Debug: Check if dist folder and assets exist
  const distPath = path.join(__dirname, 'dist');
  const assetsPath = path.join(__dirname, 'dist', 'assets');
  
  console.log('Dist folder exists:', fs.existsSync(distPath));
  console.log('Assets folder exists:', fs.existsSync(assetsPath));
  
  if (fs.existsSync(distPath)) {
    console.log('Dist contents:', fs.readdirSync(distPath));
  }
  if (fs.existsSync(assetsPath)) {
    console.log('Assets contents:', fs.readdirSync(assetsPath));
  }
});