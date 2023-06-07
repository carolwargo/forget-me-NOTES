const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const expressListEndpoints = require('express-list-endpoints');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Endpoint to list all defined routes
app.get('/list-routes', (req, res) => {
  const routes = expressListEndpoints(api.router);
  res.json(routes);
});

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) => {
  console.log('Received request for /');
  res.sendFile(path.join(__dirname, './public/index.html'));
});


// GET Route for notes page
app.get('/notes', (req, res) => {
  console.log('Received request for /notes');
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
