// imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config();

// initialize express app
const app = express();
// add cors middle ware : Allow cross origin sharing
app.use(cors());
// add body-parser middle ware for json and url encoding
// parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**  routes */

// Serve files
app.use(express.static('client/dist'));

// Root page
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// test
app.get('/api/test', (req, res) => {
  res.send(JSON.stringify({
    application: 'Mars Dashboard',
    description: 'This application consist of a dashboard that consumes the NASA API that will allow the user to select which rover\'s information they want to view.',
  }));
});

// day picture
app.get('/api/day/picture', (req, res) => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`;
  console.log(url);
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error('Unable to get picture of the day');
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.send(JSON.stringify({ error: error.message }));
    });
});

// rover picture
app.get('/api/rover/picture', (req, res) => {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${req.query.rover}/photos?sol=${req.query.sol}&page=1&api_key=${process.env.NASA_API_KEY}`;
  console.log(url);
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error('Unable to get rover pictures');
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.send(JSON.stringify({ error: error.message }));
    });
});

// rover info
app.get('/api/rover/info', (req, res) => {
  const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${req.query.rover}?api_key=${process.env.NASA_API_KEY}`;
  console.log(url);
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error('Unable to get rover info');
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((error) => {
      console.error(error);
      res.send(JSON.stringify({ error: error.message }));
    });
});

// Start app on port 8080
app.listen(8080, () => {
  console.log('Starting express server');
  console.log('Listening on port 8080');
});
