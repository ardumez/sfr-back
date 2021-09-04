const { dbContext } = require('../models-projets/db-context.model');
const { toResponseStep1Mapper } = require('../mappers/telephone-projet.mapper');
const { mapStep1ToCommand } = require('../mappers/telephone-projet.mapper');

/* eslint-disable no-unused-vars */
exports.addStep1 = async (req, res, next) => {
  /* eslint-enable no-unused-vars */

  const createStep1Command = mapStep1ToCommand(req);
  const projetClient = await dbContext.projetClient.create({
    projetTypeCode: 'TELEPHONE',
  });

  const step1Model = await dbContext.telephoneProjetStep1.create({
    nom: createStep1Command.nom,
    prenom: createStep1Command.prenom,
    projetClientId: projetClient.id,
  });

  const result = toResponseStep1Mapper(step1Model);
  res.json(result);
};
