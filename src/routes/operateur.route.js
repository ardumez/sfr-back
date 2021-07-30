var express = require('express');
var { mapStep1ToCommand } = require("../mappers/telephone-projet.mapper");
var { postCreateStep1Command } = require("../controllers/telephone-projet.controller");
var { body } = require('express-validator');
var validationResult = require('../middlewares/validation-result.middleware');

var router = express.Router();

router.get('/all', function (req, res, next) {
  var projetClientId = req.query.projetClientId;
  var operateur = [{
    label: 'Orange',
    code: 'ORANGE',
    dureeAppel: ['APPELS_2H', 'APPEL_ILIMITE'],
  }];
  res.json(operateur);
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