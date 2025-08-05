const express = require('express');
const app = express();
const PORT = 3000;

// Dummy weather data
const weatherData = {
  NewYork: {
    location: 'New York',
    temperature: '26°C',
    description: 'Sunny'
  },
  London: {
    location: 'London',
    temperature: '18°C',
    description: 'Cloudy'
  },
  Mumbai: {
    location: 'Mumbai',
    temperature: '32°C',
    description: 'Humid and hot'
  },
  Delhi: {
    location: 'Delhi',
    temperature: '30°C',
    description: 'Dusty and dry'
  }
};

// Route: GET /
app.get('/', (req, res) => {
  res.send('<h1>🌦️ Welcome to the Weather Forecast Service!</h1><p>Use /weather?location=CityName</p>');
});

// Route: GET /weather
app.get('/weather', (req, res) => {
  const userLocation = req.query.location;

  // Case 1: No location provided
  if (!userLocation) {
    return res.status(400).json({
      error: 'Location query parameter is required. Example: /weather?location=London'
    });
  }

  // Convert location to match keys (optional: ignore case)
  const key = userLocation.replace(/\s/g, '').toLowerCase();

  // Find weather data using case-insensitive match
  const matchedKey = Object.keys(weatherData).find(loc => loc.toLowerCase() === key);

  // Case 2: Location not found
  if (!matchedKey) {
    return res.status(404).json({
      error: `Weather data not found for location: ${userLocation}`
    });
  }

  // Case 3: Success
  res.json(weatherData[matchedKey]);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Weather server running at http://localhost:${PORT}`);
});
