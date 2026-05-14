const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const lat = 39.1732;
    const lon = -77.2717;

    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit`
    );

    const weather = response.data.current_weather;

    res.json({
      temperature: weather.temperature,
      windspeed: weather.windspeed,
      weathercode: weather.weathercode
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};