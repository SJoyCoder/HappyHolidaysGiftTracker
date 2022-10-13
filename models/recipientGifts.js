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
      giftId: {
        type: DataTypes.INTEGER,
        allowNull:null,
        references: {
            model: 'gifts',
            key: 'id',
          },
      },
    recipientId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'recipient',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipientgifts',
  }
);

module.exports = RecipientGifts;