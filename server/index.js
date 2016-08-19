var express = require('express');
var app = express();

app.get('/api', function (req, res) {
  res.send("API not configured yet, but this route works");
});

app.use(express.static('client'));

app.listen(process.env.PORT || 5000, function () {
  console.log("Family Tree Server listening on port " + (process.env.PORT || 5000));
});

var db = require('./db.js');