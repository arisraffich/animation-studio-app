const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

// Increase the body size limit to 50MB (adjust as needed)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Serve static files from dist directory (built files)
app.use(express.static(path.join(__dirname, 'dist')));

// API proxy route
app.post('/api/proxy', async (req, res) => {
  // Check if API key exists
  if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set in environment variables');
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`;
    
    console.log('Making request to Gemini API...');
    
    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Gemini API Error:', errorBody);
      return res.status(response.status).json({ 
        error: 'Gemini API Error', 
        details: errorBody 
      });
    }

    const data = await response.json();
    console.log('Gemini API request successful');
    res.status(200).json(data);

  } catch (error) {
    console.error('Error in proxy handler:', error);
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
