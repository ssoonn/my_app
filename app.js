var express = require('express');
var path = require('path');
var app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '/public')));
//console.log(__dirname);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello', function (req, res) {
  res.render("hello", {name:req.query.nameQuery});
});

app.get("/hello/:nameParam", function(req, res) {
  res.render("hello", {name:req.params.nameParam});
});

app.listen(3000, function () {
  console.log('Server On!');
});
