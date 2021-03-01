const express = require('express');
const cors = require('cors');
const client = require('./client.js');
const app = express();
const morgan = require('morgan');
const ensureAuth = require('./auth/ensure-auth');
const createAuthRoutes = require('./auth/create-auth-routes');
const request = require('superagent');

const { getLocation, getForecast, getReviews } = require('./munge-utils.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev')); // http logging

app.get('/location', async (req, res) => {
  try {
    const queryCity = req.query.search;

    const responseData = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_IQ_KEY}&q=${queryCity}&format=json`);

    const formattedLocation = getLocation(responseData.body);

    res.json(formattedLocation);
  } catch (e) {

    res.status(500).json({ error: e.message });
  }
});

app.get('/weather', async (req, res) => {
  try {
    const queryLat = req.query.latitude;
    const queryLon = req.query.longitude;

    const responseData = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${queryLat}&lon=${queryLon}&key=${process.env.WEATHERBIT_API_KEY}`);



    const formattedForecasts = getForecast(responseData.body);

    res.json(formattedForecasts);
  } catch (e) {

    res.status(500).json({ error: e.message });
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const queryLat = req.query.latitude;
    const queryLon = req.query.longitude;

    const responseData = await request.get(`https://api.yelp.com/v3/businesses/search?latitude=${queryLat}&longitude=${queryLon}`).set('Authorization', `Bearer ${process.env.YELP_API_KEY}`);

    const formattedReviews = getReviews(responseData.body);

    res.json(formattedReviews);
  } catch (e) {

    res.status(500).json({ error: e.message });
  }
});

app.use(require('./middleware/error'));

module.exports = app;
