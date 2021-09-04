const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUiDist = require('swagger-ui-dist');
const cors = require('cors');
const projetTelephoneRoute = require('./src/routes/telephone-projet.route');
const operateurRoute = require('./src/routes/operateur.route');
require('./src/models-operateurs/operateurs-db-context.model');

const app = express();
app.use(cors());
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
