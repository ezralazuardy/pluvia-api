const express = require('express')
const cors = require('cors')
const RateLimit = require('express-rate-limit')

if (!process.env.GOOGLE_API_KEY || !process.env.WEATHER_API_KEY) {
  const keys = require('./keys')
  if (!process.env.GOOGLE_API_KEY) process.env.GOOGLE_API_KEY = keys.GOOGLE_API_KEY
  if (!process.env.WEATHER_API_KEY) process.env.WEATHER_API_KEY = keys.WEATHER_API_KEY
}

const landing = require('./routes/landing')
const geocode = require('./routes/geocode')
const weather = require('./routes/weather')
const index = express()

// rate limiting
const limiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  delayMs: 0 // disable delaying - full speed until the max limit is reached
})

index.use(cors())
index.use(limiter)
index.use(landing)
index.use(geocode)
index.use(weather)
index.listen(process.env.PORT || 3000, function () {
  console.log('> Starting API server...')
  console.log('> Listening at http://localhost:' + this.address().port)
})

module.exports = index
