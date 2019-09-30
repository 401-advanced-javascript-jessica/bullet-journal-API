'use strict';

const express = require('express');
const cors = require('cors');

const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (request, response) => {
  response.status(200).send('App is Up!');
});

app.use('/*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => app.listen(port || 3000, () =>  console.log(`Server up on port ${port}`)),
};
