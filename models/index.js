const User = require('./User');
const Gift = require('./Gift');

User.hasMany(Gift, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Gift.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Gift };
