const router = require('express').Router();
const userRoutes = require('./userRoutes');
const giftRoutes = require('./giftRoutes');
const recipientRoutes = require('./recipientRoutes');

router.use('/users', userRoutes);
router.use('/gift', giftRoutes);
router.use('/recipient', recipientRoutes)

module.exports = router;
