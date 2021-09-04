const Sequelize = require('sequelize');
const defTelephoneProjetStep1 = require('./telephone-projet-step1.model');
const defProjetClient = require('./projet-client.model');
const detProjetType = require('./projet-type.model');
require('dotenv').config();

const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@localhost:5432/sfr-projets`,
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const telephoneProjetStep1 = defTelephoneProjetStep1(sequelize);
const projetClient = defProjetClient(sequelize);
const projetType = detProjetType(sequelize);

telephoneProjetStep1.belongsTo(projetClient);
projetClient.belongsTo(projetType);

sequelize.sync({ force: true }).then(() => {
  console.log('Database OK');
  projetType.bulkCreate([
    { code: 'TELEPHONE' },
    { code: 'ELECTRICITE' },
    { code: 'INTERNET' },
  ]);
});

module.exports.dbContext = {};
module.exports.dbContext.telephoneProjetStep1 = telephoneProjetStep1;
module.exports.dbContext.projetClient = projetClient;
module.exports.dbContext.projetType = projetType;
