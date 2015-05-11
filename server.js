var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/commuting');
var Ride = mongoose.model('Rides', {
  user:String,
  km: Number,
  date: {type: Date, default: Date.now},
  comment: String,
  tags: [{type: String}]
});

var app = express();

app.use(bodyParser.json());

app.get('/api/rides', function (req, res) {
  Ride.find(function (err, rides) {
    if (err) {
      console.log(err);
      res.send();
    } else {
      res.send(rides);
    }
  })
});

app.put('/api/ride', function (req, res) {
  var inputride = req.body.ride;
  var ride = new Ride(inputride);
  ride.save(function (err) {
    if (err) {
      console.log(err);
    }
    res.send();
  });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get(/(.+)/, function (req, res) {
  res.sendFile(path.join(__dirname, 'public/' + req.params[0]));
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});