const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const MapController = require('../controllers/map_controller')
var receiver = new MapController();

const PORT = process.env.PORT || 3000
app.use(volleyball);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//serve up static files
app.use(express.static(path.resolve(__dirname, '..', 'client')));
app.use(express.static(path.resolve(__dirname, '..', 'node_modules')));
app.use(express.static(path.resolve(__dirname, '..', 'public')));


// 500
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// handle every other route with index.html, which will contain
// a script tag to our application's JavaScript file(s).
const ROUTES = ['/', '/travel', '/dashboard/:user_id', '/coffee-update',
                '/login', '/register', '/countDown', 'widget', 'form/:form_name',
                '/results', '/users', '/upload', '/loading', '/goog', '/calendar']

const data = fs.readFileSync('data/locations.json')
const Locations = JSON.parse(data).locations

app.get(ROUTES, function (request, response) {
  response.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'))
});

app.get('/info', (req, res) => {
  res.send({ length: Locations.length })
})
app.get('/locations', (req, res) => {
  const rando = Math.floor(Math.random() * Locations.length)
  res.send({ locations: Locations.splice(rando, 4) })
})
app.post('/upload', (req, res) => {
  receiver.upload(req, res, (files)=> {
    res.send('uploaded')
  })
})

app.listen(PORT, function () {
  console.log("Rockin out on port " + PORT + " homie");
});

// 404
app.use(function(req, res, next){
  res.status(404);

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});
