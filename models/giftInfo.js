const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GiftInfo extends Model { }

GiftInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    is_purchased: {
      type: DataTypes.BOOLEAN,
      allowNull: null
    },
    giftName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      references: {
        model: 'recipient',
        key: 'budget',
      },
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
    modelName: 'giftInfo',
  }
);

module.exports = GiftInfo;