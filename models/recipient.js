const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipient extends Model {}

Recipient.init(

  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull:null
    },
    budget: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      
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

