const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecipientGifts extends Model {}

RecipientGifts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
      giftID: {
        type: DataTypes.INTEGER,
        allowNull:null,
        references: {
            model: 'giftInfo',
            key: 'id',
          },
      },
    personID: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'recipient',
        key: 'name',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'hasGift',
  }
);

module.exports = RecipientGifts;