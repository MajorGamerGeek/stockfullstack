const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./api/routes');

const app = express();

app.use(cors());

app.set('port', (process.env.PORT || 3001));

app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.use((req, res, next) => {
  const authToken = req.get('Authorization')

  if (authToken && authToken == 'stocksapi') {
    req.token = authToken;
    next();
  } else {
    res.status(403).send({
      error: 'Authorization header invalid! (Provide a valid Authorization header)'
    });
  }
});

app.use(routes);

var server = app.listen(app.get('port'), function() {
    var setPort = server.address().port;
    console.log('The magic happens on port', setPort);
});