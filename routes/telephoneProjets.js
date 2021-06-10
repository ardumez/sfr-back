var express = require('express');
var { dbContext } = require("../database/dbContext");

var router = express.Router();

router.get('/', function (req, res, next) {
  var projetClientId = req.query.projetClientId;
  res.json({ "projetClientId": projetClientId });
});

router.post('/', function (req, res, next) {
  dbContext.telephoneProjet.create(req.body)
    .then();
  res.sendStatus(200);
});

module.exports = router;
