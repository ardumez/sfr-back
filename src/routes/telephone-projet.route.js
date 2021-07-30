var express = require('express');
var { mapStep1ToCommand } = require("../mappers/telephone-projet.mapper");
var { postCreateStep1Command } = require("../controllers/telephone-projet.controller");
var { body } = require('express-validator');
var validationResult = require('../middlewares/validation-result.middleware');

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
