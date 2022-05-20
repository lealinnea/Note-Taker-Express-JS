const path = require('path');
const app = require('express').Router();

// getting notes pages
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);
//anything other than /notes will take you home -wild card 
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = app 