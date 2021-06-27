const Sequelize = require('sequelize');
const defTelephoneProjetStep1 = require('./telephoneProjetStep1');
const defProjetClient = require('./projetClient');
const detProjetType = require('./projetType');

const sequelize = new Sequelize('postgres://MyUser:Password!23@localhost:5432/sfr-database');

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const telephoneProjetStep1 = defTelephoneProjetStep1(sequelize);
const projetClient = defProjetClient(sequelize);
const projetType = detProjetType(sequelize);

telephoneProjetStep1.belongsTo(projetClient);
projetClient.belongsTo(projetType);

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database OK`);
    projetType.bulkCreate([
      { code: 'TELEPHONE' },
      { code: 'ELECTRICITE' },
      { code: 'INTERNET' }
    ]);
  });

module.exports = {
  dbContext: {
    telephoneProjetStep1,
    projetClient,
    projetType
  }
};