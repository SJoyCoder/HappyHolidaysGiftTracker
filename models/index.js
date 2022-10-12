const User = require('./User');
const recipient = require('./recipient');
const User = require('./giftInfo');
const User = require('./hasGift');



User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
