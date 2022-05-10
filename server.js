const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const { readFromFile, readAndAppend } = require('./helpers/fsUtils');
const api = require('./routes/api');
const uuid = require('./helpers/uuid');
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use ('/api, api');

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/index.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);