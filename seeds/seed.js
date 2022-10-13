const sequelize = require('../config/connection');
const { User, Gifts, Recipient, RecipientGifts } = require('../models');

const userData = require('./userData.json');
const giftData = require('./giftData.json');
const recipientData = require('./recipientData.json');
const recipientGiftsData = require('./recipientGiftsData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const gift of giftData) {
    await Gifts.create({
      ...gift,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const recipient of recipientData) {
    await Recipient.create({
      ...recipient,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const recipientGifts of recipientGiftsData) {
    await RecipientGifts.create({
      ...recipientGifts,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
