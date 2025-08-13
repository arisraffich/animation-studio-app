// Load environment variables - .env.local for development, Railway env vars for production
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '.env.local' });
}
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8081;

// Increase the body size limit to 50MB (adjust as needed)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Serve static files from dist directory (built files)
app.use(express.static(path.join(__dirname, 'dist')));


// Vidu API proxy routes
app.post('/api/vidu/create', async (req, res) => {
  if (!process.env.VIDU_API_KEY) {
    return res.status(500).json({ error: 'Vidu API key not configured' });
  }

  try {
    const response = await fetch('https://api.vidu.com/ent/v2/img2video', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.VIDU_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Vidu API Error:', errorBody);
      return res.status(response.status).json({ 
        error: 'Vidu API Error', 
        details: errorBody 
      });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in Vidu create proxy:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
});

app.get('/api/vidu/status/:taskId', async (req, res) => {
  if (!process.env.VIDU_API_KEY) {
    return res.status(500).json({ error: 'Vidu API key not configured' });
  }

  try {
    const { taskId } = req.params;
    const response = await fetch(`https://api.vidu.com/ent/v2/tasks/${taskId}/creations`, {
      headers: {
        'Authorization': `Token ${process.env.VIDU_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Vidu Status API Error:', errorBody);
      return res.status(response.status).json({ 
        error: 'Vidu Status API Error', 
        details: errorBody 
      });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in Vidu status proxy:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
});

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
      return res.status(response.status).json({ 
        error: 'Seedance API Error', 
        details: errorBody 
      });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in Seedance create proxy:', error);
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
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in Seedance status proxy:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
});

// OpenAI GPT-5 API endpoint
app.post('/api/openai', async (req, res) => {
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key not configured' });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('OpenAI API Error:', errorBody);
      return res.status(response.status).json({ 
        error: 'OpenAI API Error', 
        details: errorBody 
      });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error in OpenAI proxy:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      details: error.message 
    });
  }
});

// Serve index.html for all other routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});