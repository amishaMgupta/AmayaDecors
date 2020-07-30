const express = require('express');
const api = require('./api');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/Web',api);

module.exports = app;