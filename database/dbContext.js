const Sequelize = require('sequelize');
const telephoneProjetStep1Model = require('../models/telephoneProjetStep1Model');

const sequelize = new Sequelize('postgres://MyUser:Password!23@localhost:5432/sfr-database');

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const telephoneProjet = telephoneProjetStep1Model(sequelize);
const note = sequelize.define('notes', { note: Sequelize.TEXT, tag: Sequelize.STRING });

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);
    note.bulkCreate([
      { note: 'pick up some bread after work', tag: 'shopping' },
      { note: 'remember to write up meeting notes', tag: 'work' },
      { note: 'learn how to use node orm', tag: 'work' }
    ]);
  });

module.exports = {
  dbContext: {
    note,
    telephoneProjet
  }
};