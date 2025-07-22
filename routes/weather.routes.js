const express = require("express");
const router = express.Router();
const { getWeatherByCity } = require("../controllers/weather.controller");

router.get("/weather/city", getWeatherByCity);

module.exports = router;
