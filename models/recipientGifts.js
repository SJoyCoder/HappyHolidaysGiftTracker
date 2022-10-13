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
      gift_id: {
        type: DataTypes.INTEGER,
        allowNull:null,
        references: {
            model: 'Gifts',
            key: 'id',
          },
      },
    recipient_id: {
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