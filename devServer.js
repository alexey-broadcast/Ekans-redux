var express = require('express');
var path = require('path');
var webpack = require('webpack');

var app = express();
var config = require('./webpack.config.dev.js');
var compiler = webpack(config);

// Define the port to run on
app.set('port', 3000);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});

// Listen for requests
var server = app.listen(app.get('port'), function(err) {
  if(err) {
    console.log(err);
    return;
  }

  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
