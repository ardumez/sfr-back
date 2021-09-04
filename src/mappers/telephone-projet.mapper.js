exports.mapStep1ToCommand = (req) => ({
  nom: req.body.nom,
  prenom: req.body.prenom,
});

exports.toResponseStep1Mapper = (model) => ({
  id: model.id,
  nom: model.nom,
  prenom: model.prenom,
});
