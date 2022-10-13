const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gifts extends Model { }

Gifts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    giftName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_purchased: {
      type: DataTypes.BOOLEAN,
      allowNull: null
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
     
    },
    whereToBuy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gifts',
  }
);

module.exports = Gifts;