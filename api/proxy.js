// /api/proxy.js

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Construct the Google Gemini API URL using the correct model and the API key from environment variables.
    // This is the key change: using 'gemini-2.0-flash' to match the frontend application's logic.
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
    
    // Forward the request from the client to the Gemini API.
    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // The body from the client request is passed through directly.
      body: JSON.stringify(req.body)
    });

    // Check if the request to the Gemini API was successful.
    if (!response.ok) {
      const errorBody = await response.text();
      console.error('Gemini API Error:', errorBody);
      throw new Error(`Gemini API Error: ${response.status} - ${errorBody}`);
    }

    // Parse the JSON response from the Gemini API.
    const data = await response.json();
    
    // Send the successful response back to the client.
    res.status(200).json(data);

  } catch (error) {
    // Handle any errors that occur during the process.
    console.error('Error in proxy handler:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
