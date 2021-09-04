const Operateur = require('../models-operateurs/operateur.model');

/* eslint-disable no-unused-vars */
exports.getOperateurs = async (req, res, next) => {
  /* eslint-enable no-unused-vars */

  Operateur.find()
    .then((products) => res.json(products))
    .catch(() =>
      res.status(404).json({ noproductsfound: 'No products found' }),
    );
};
