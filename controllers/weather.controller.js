const { fetchByCity } = require("../services/weather");

exports.getWeatherByCity = async (req, res) => {
  const { city } = req.query;
  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    const data = await fetchByCity(city);
    res.status(200).json(data);
  } catch (err) {
    console.error("getWeatherByCity Error:", err.message);
    res.status(500).json("Internal server error");
  }
};
