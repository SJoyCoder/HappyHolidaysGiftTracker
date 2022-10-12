const User = require('./User');
const Recipient = require('./recipient');
const GiftInfo = require('./giftInfo');
const HasGift = require('./hasGift');



User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
