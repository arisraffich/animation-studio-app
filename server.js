const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// API proxy route
app.post('/api/proxy', async (req, res) => {
  try {
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`;
    
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
      throw new Error(`Gemini API Error: ${response.status} - ${errorBody}`);
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    console.error('Error in proxy handler:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
