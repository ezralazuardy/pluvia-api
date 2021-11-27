<a href="https://api.pluvia.ezralazuardy.com">
  <img src="https://therealsujitk-vercel-badge.vercel.app/?app=h2ve2mke3v" alt="Deployment">
</a>
<a href="https://nodejs.org/en/download">
    <img alt="Node Version" src="https://img.shields.io/badge/node-%3E%3D%2012-brightgreen">
</a>
<a href="https://nodejs.org/en/download">
    <img alt="npm Version" src="https://img.shields.io/badge/npm-%3E%3D%206-red">
</a>
<a href="https://github.com/ezralazuardy/pluvia-api/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/ezralazuardy/pluvia-api" alt="License">
</a>

# 🛰️ pluvia-api

Simple API backend for [Pluvia](https://github.com/ezralazuardy/pluvia),
built using [Express.js](https://expressjs.com).

Demo instance is accesible at https://api.pluvia.ezralazuardy.com.

### ✅ Prerequisites

* [Express.js](https://expressjs.com) `v4`
* [openweather-apis](https://www.npmjs.com/package/openweather-apis) `v4`
* [Node.js](https://nodejs.org) `v12`
* [npm](https://nodejs.org) `v6`
* [Google API Key](https://developers.google.com/maps/documentation/javascript/get-api-key)
* [Open Weather Map API Key](https://home.openweathermap.org/api_keys)

> You need to generate a new `Google API Token` with access to these APIs:
> * [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/get-api-key)
> * [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/get-api-key)
> * [Google Places API](https://developers.google.com/places/web-service/autocomplete)
>
> If some of those APIs are not enabled, bug or error may appear in the app.

### 🚀 Getting Started

Clone this repository.

```bash
# clone repo
git clone https://github.com/ezralazuardy/pluvia-api.git
```

On the root project directory, copy the `keys.js.example` to `keys.js` and add your
[Google API](https://developers.google.com/maps/documentation/javascript/get-api-key) key and
[Open Weather Map API](https://home.openweathermap.org/api_keys) key.

```bash
# copy the keys.js
cp keys.js.example keys.js
```

Now you can build and run the instance.

``` bash
# install dependencies
npm install

# start the express instance
npm run start
```
