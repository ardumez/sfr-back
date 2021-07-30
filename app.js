var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var projetTelephoneRoute = require('./src/routes/telephone-projet.route');
var operateurRoute = require('./src/routes/operateur.route');
var swaggerUiDist = require("swagger-ui-dist");
var cors = require('cors');

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/operateur', operateurRoute);
app.use('/projet-telephone', projetTelephoneRoute);

// swagger
app.use('/swagger-ui', express.static(swaggerUiDist.getAbsoluteFSPath()));
app.use('/open-api', express.static('swagger.json'));
app.get('/swagger', (req, res) => {
  res.redirect('/swagger-ui?url=http://localhost:3000/open-api');
});

module.exports = app;
