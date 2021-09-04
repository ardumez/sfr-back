const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'telephoneProjetStep1',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nom: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      prenom: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      tableName: 'telephones_projets_step1',
    },
  );
