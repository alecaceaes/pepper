var express = require('express');
var app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var cors = require('cors');

var request = require("request");

var port = process.env.PORT || 8080;

app.use(cors());


var options = { method: 'POST',
  url: 'https://dev-pepper.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"ZFaNOVMeXSpuA680t1G737ndjFS8zUv7","client_secret":"BcbhD-PdmcX59zGZ6gWgTKxdOca0dcIW-rIFaqucnUm5w3DP3Vg1QY-OlzWNXGeY","audience":"https://api.dev-pepper.com","grant_type":"client_credentials"}' };

var token;

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  token = body.access_token;
});

app.get('/authorized', function (req, res) {
  req.headers = {
    authorization:  "Bearer " +  token
  }
  res.send('Secured Resource');
});

app.listen(port);