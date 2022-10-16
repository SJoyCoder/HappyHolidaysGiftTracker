const router = require('express').Router();
const { Recipient} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newRecipient = await Recipient.create({
        ...req.body,
        
      });
      res.status(200).json(newRecipient);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });
  
  module.exports = router;