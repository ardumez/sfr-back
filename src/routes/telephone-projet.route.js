const express = require('express');
const { body } = require('express-validator');
const telephoneProjetController = require('../controllers/telephone-projet.controller');
const validationResult = require('../middlewares/validation-result.middleware');

const router = express.Router();

router.get('/', (req, res) => {
  const { projetClientId } = req.query;
  res.json({ projetClientId });
});

router.post(
  '/step1',
  body('nom').not().isEmpty(),
  body('prenom').not().isEmpty(),
  validationResult,
  telephoneProjetController.addStep1,
);

module.exports = router;
