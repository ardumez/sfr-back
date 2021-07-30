var { dbContext } = require("../models-projets/db-context");
var { mapStep1ToResponse } = require("../mappers/telephone-projet.mapper");

exports.postCreateStep1Command = async (createStep1Command) => {
  var projetClient = await dbContext.projetClient.create({
    projetTypeCode: 'TELEPHONE'
  });
  var step1Model = await dbContext.telephoneProjetStep1.create({
    nom: createStep1Command.nom,
    prenom: createStep1Command.prenom,
    projetClientId: projetClient.id
  });
  return mapStep1ToResponse(step1Model);
};