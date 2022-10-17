const router = require('express').Router();
const { Gifts, User, RecipientGifts, Recipient } = require('../models');
const withAuth = require('../utils/auth');

router.get('/gift', async (req, res) => {
  try {
    // Get all gifts and JOIN with user data
    // const giftData = await Gifts.findAll({
    // include: [
    //   {
    //     model: RecipientGifts,
    //     attributes: ['gift_id'],
    //   },
    // ],
    // });
    // const recipientData = await Recipient.findAll()
    const recipientGift = await Recipient.findAll({
      include: [
        {
          model: Gifts,
          through: RecipientGifts,
        },
      ],
    });
    // Serialize data so the template can read it
    // const gifts = giftData.map((gift) => gift.get({ plain: true }));
    // const recipients = recipientData.map((recipient) => recipient.get({ plain: true }));
    const recGifts = recipientGift.map((recipient) =>
      recipient.get({ plain: true })
    );

    console.log(...recGifts)
    res.render('gift', {
      recGifts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/gift/:id', async (req, res) => {
  try {
    const giftData = await Gifts.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const gift = giftData.get({ plain: true });

    res.render('gift', {
      ...gift,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
     include: [{ model: Recipient }],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;







