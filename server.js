
var express = require('express')
var app = express()
const path = require('path');

app.use(express.static(__dirname + '/dist'));

/* app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/online-mobile-store/'}
);
}); */

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/online-mobile-store/index.html'));
});

app.listen(process.env.PORT || 8080);
