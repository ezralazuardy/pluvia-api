const express = require('express')
const weather = require('openweather-apis')

const router = express.Router()
weather.setAPPID(process.env.WEATHER_API_KEY)
weather.setLang('en')

router.get('/weather/v1/json', (req, res) => {
  weather.setCoordinate(req.query.lat, req.query.lon)
  weather.setUnits(req.query.units === 'us' ? 'imperial' : 'metric')
  weather.getWeatherOneCall((error, response) => {
    if (!error) res.send(response)
  })
})

module.exports = router
