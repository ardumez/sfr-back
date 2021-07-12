var express = require('express');
var { mapStep1ToCommand } = require("../Mappers/ProjetTelephoneMapper");
var { postCreateStep1Command } = require("../Controllers/ProjetTelephoneController");
var { body } = require('express-validator');
var validationResult = require('../Middlewares/ValidationResultMiddleware');

var router = express.Router();

router.get('/all', function (req, res, next) {
  var projetClientId = req.query.projetClientId;
  var operateur = {
    label: 'Orange',
    code: 'ORANGE',
    dureeAppel: ['APPELS_2H', 'APPEL_ILIMITE'],
  };
  res.json({ "projetClientId": projetClientId });
});

router.get('/filters/dureeAppel', function (req, res, next) {
  var filters = [
    { code: 'APPELS_2H', label: '2h d\'appels' },
    { code: 'APPEL_ILIMITE', label: 'Ilimité' },
  ];
  res.json(filters);
});

router.get('/forfait/search', function (req, res, next) {
  var projetClientId = req.query.operateurMobileId;
  res.json({ "operateurMobile": projetClientId, "titre": "Forfait 2h Illimité" });
});

module.exports = router;