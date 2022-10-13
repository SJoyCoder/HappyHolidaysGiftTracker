const User = require('./User');
const Recipient = require('./recipient');
const Gifts = require('./Gifts');
const RecipientGifts = require('./recipientGifts');




User.hasMany(Recipient, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Gifts.belongsToMany(Recipient, {
  through: {
    model: RecipientGifts,
    unique: false
  },
});

Recipient.belongsToMany(Gifts, {
  through: {
    model: RecipientGifts,
    unique: false
  },
});


Recipient.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Gifts, Recipient, RecipientGifts };
