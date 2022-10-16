const router = require('express').Router();
const { Gifts, RecipientGifts, Recipient} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newGift = await Gifts.create({
      ...req.body,
      
    });
    
    console.log(newGift.id);
    const recipientGift = await RecipientGifts.create({
      giftId: newGift.id,
      recipientId: 5,
    });
    

    res.status(200).json(newGift);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const giftData = await Gifts.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!giftData) {
      res.status(404).json({ message: 'No gift found with this id!' });
      return;
    }

    res.status(200).json(giftData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
