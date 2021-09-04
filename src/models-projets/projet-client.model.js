const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'projetClient',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
      tableName: 'projets_clients',
    },
  );
