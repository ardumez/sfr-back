var express = require('express');
var { mapStep1ToCommand } = require("../Mappers/ProjetTelephoneMapper");
var { postCreateStep1Command } = require("../Controllers/ProjetTelephoneController");
var { body } = require('express-validator');
var validationResult = require('../Middlewares/ValidationResultMiddleware');

var router = express.Router();

router.get('/', function (req, res, next) {
  var projetClientId = req.query.projetClientId;
  res.json({ "projetClientId": projetClientId });
});

router.post('/step1',
  body('nom').not().isEmpty(),
  body('prenom').not().isEmpty(),
  validationResult,
  async (req, res) => {
    var step1Command = mapStep1ToCommand(req);
    var result = await postCreateStep1Command(step1Command);
    res.json(result);
  });

module.exports = router;
