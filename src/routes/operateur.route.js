const express = require('express');
const { getOperateurs } = require('../controllers/operateur.controller');

const router = express.Router();

/* eslint-disable no-unused-vars */
router.get('/all', getOperateurs);

// const operateur = [
//   {
//     label: 'Orange',
//     code: 'ORANGE',
//     dureeAppel: ['APPELS_2H', 'APPEL_ILIMITE'],
//   },
// ];

/* eslint-disable no-unused-vars */
router.get('/filters/dureeAppel', (req, res, next) => {
  /* eslint-enable no-unused-vars */
  const filters = [
    { code: 'APPELS_2H', label: "2h d'appels" },
    { code: 'APPEL_ILIMITE', label: 'Ilimité' },
  ];
  res.json(filters);
});

/* eslint-disable no-unused-vars */
router.get('/forfait/search', (req, res, next) => {
  /* eslint-enable no-unused-vars */
  const projetClientId = req.query.operateurMobileId;
  res.json({ operateurMobile: projetClientId, titre: 'Forfait 2h Illimité' });
});

module.exports = router;
