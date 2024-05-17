// routes/supplyRoutes.js
const express = require('express');
const router = express.Router();
const Supply = require('../database/Supply');
const Donation = require('../database/ordersSchema');
const User = require('../database/User');
const authMiddleware=require("../authMiddleware");
// Route to request supplies
router.use(authMiddleware);
router.post('/supplies', async (req, res) => {
    const { recipientId, category, itemName, quantity, expiryDate } = req.body;

    try {
        const newSupply = new Supply({
            recipientId,
            category,
            itemName,
            quantity,
            expiryDate
        });
        await newSupply.save();
        res.status(201).json(newSupply);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Route to get supplies for a recipient
router.get('/supplies', async (req, res) => {
    const recipientId = req.userId;

    try {
        const supplies = await Supply.find({ recipientId });
        res.json(supplies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to find matched donations
// Route to find matched donations
router.get('/matches', async (req, res) => {
    const recipientId = req.userId;

    try {
        const supplies = await Supply.find({ recipientId });
        const matches = [];

        for (const supply of supplies) {
            const matchedDonations = await Donation.find({
                category: supply.category,
                itemName: supply.itemName,
                quantity: { $gte: supply.quantity }
            });

            for (const donation of matchedDonations) {
                const donor = await User.findById(donation.donorId);
                matches.push({
                    ...donation._doc,
                    donorName: donor.name
                });
            }
        }

        res.json(matches);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;
