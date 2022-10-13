const User = require('./User');
const Recipient = require('./recipient');
const Gifts = require('./Gifts');
const RecipientGifts = require('./recipientGifts');




User.hasMany(Recipient, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Gifts.belongsTo(Recipient, {
  foreignKey: 'giftID'
});

module.exports = { User, Gifts };
