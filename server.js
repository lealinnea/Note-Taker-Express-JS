const express = require('express');
const api = require('./routes/api');
const home = require('./routes/homeRoutes')
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use ('/api/notes', api);
app.use ('/', home);


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);