const User = require('./User');
const Recipient = require('./recipient');
const GiftInfo = require('./giftInfo');
const HasGift = require('./hasGift');


const Gift = require('./Gift');

User.hasMany(Gift, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Gift.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Gift };
