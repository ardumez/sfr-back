const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'projetType',
    {
      code: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      tableName: 'projets_types',
    },
  );
