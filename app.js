const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');

const mo = require('./mongo-ops');

const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('./public/index');
});

app.post('/', (req, res) => {
  res.send('Got your post');
});

app.listen(3000, function() {
  console.log('Server now running at http://localhost:3000');
});