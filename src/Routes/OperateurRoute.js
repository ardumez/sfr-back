var express = require('express');
var { mapStep1ToCommand } = require("../Mappers/ProjetTelephoneMapper");
var { postCreateStep1Command } = require("../Controllers/ProjetTelephoneController");
var { body } = require('express-validator');
var validationResult = require('../Middlewares/ValidationResultMiddleware');

var router = express.Router();

router.get('/all', function (req, res, next) {
  var projetClientId = req.query.projetClientId;
  res.json({ "projetClientId": projetClientId });
});

router.get('/forfait/search', function (req, res, next) {
  var projetClientId = req.query.operateurMobileId;
  res.json({ "operateurMobile": projetClientId, "titre": "Forfait 2h Illimité" });
});