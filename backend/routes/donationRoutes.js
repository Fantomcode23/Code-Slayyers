const express = require('express');
const { createDonation, getDonations } = require('../controllers/donationController');
const router = express.Router();

router.post('/donations', createDonation);
router.get('/donations', getDonations);

module.exports = router;
