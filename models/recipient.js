const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipient extends Model {}

Recipient.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull:null
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    budget: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true,
    },
    hasGiftIdea: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    //Double check relationship to previous ID
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipient',
  }
);

module.exports = Recipient;
