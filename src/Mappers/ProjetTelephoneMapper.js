
exports.mapStep1ToCommand = (req) => {
  return {
    nom: req.body.nom,
    prenom: req.body.prenom
  };
}

exports.mapStep1ToResponse = (model) => {
  return {
    id: model.id
  }
};