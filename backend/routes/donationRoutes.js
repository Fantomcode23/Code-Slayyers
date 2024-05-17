const express = require('express');
const { createDonation, getDonations } = require('../controllers/donationController');
const authMiddleware = require('../authMiddleware');
const router = express.Router();

router.post('/donations', authMiddleware, createDonation);
router.get('/donations', authMiddleware, getDonations);

module.exports = router;
