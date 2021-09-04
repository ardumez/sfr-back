const mongoose = require('mongoose');

const { Schema } = mongoose;

const operateurSchema = new Schema({
  label: String,
});

module.exports = mongoose.model('Operateur', operateurSchema);
