const mongoose = require('mongoose');
const Operateur = require('./operateur.model');
require('dotenv').config();

mongoose.connect(
  `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/sfr_operateurs?authSource=admin`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('coucou');
});

Operateur.collection.drop();

Operateur.find((err, operateurs) => {
  if (operateurs.length === 0) {
    const orange = new Operateur({
      label: 'Sfr',
      code: 'ORANGE',
      dureeAppel: ['APPELS_2H', 'APPEL_ILIMITE'],
    });
    orange.save();
  }
  console.log(operateurs);
  return '';
});
