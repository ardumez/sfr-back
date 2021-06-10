var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var usersRouter = require('./routes/users');
var telephoneProjets = require('./routes/telephoneProjets');
var swaggerUiAssetPath = require("swagger-ui-dist").getAbsoluteFSPath();
const cors = require('cors')

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/telephone-projets', telephoneProjets);

app.use('/swagger-ui', express.static(swaggerUiAssetPath));

app.use('/open-api', express.static('sfr.json'));
app.get('/swagger', (req, res) => {
  res.redirect('/swagger-ui?url=http://localhost:3000/open-api');
});

module.exports = app;
