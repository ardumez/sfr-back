var express = require('express');
var { dbContext } = require("../models/dbContext");

var router = express.Router();

router.get('/', function (req, res, next) {
  var projetClientId = req.query.projetClientId;
  res.json({ "projetClientId": projetClientId });
});

router.post('/', async (req, res) => {
  var projetClient = await dbContext.projetClient.create({
    projetTypeCode: 'TELEPHONE'
  });
  var telephoneProjetStep1 = await dbContext.telephoneProjetStep1.create({
    nom: req.body.nom,
    prenom: req.body.prenom,
    projetClientId: projetClient.id
  });
  res.json({ "id": telephoneProjetStep1.id });
});

module.exports = router;
