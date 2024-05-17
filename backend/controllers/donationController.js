const Donation = require('../database/ordersSchema');
const jwt = require('jsonwebtoken');

exports.createDonation = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        const { category, itemName, quantity, expiryDate } = req.body;
        const newDonation = new Donation({
            donor: decoded.userId,
            category,
            itemName,
            quantity,
            expiryDate,
        });
        await newDonation.save();
        res.status(201).json({ message: 'Donation created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getDonations = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        const donations = await Donation.find({ donor: decoded.userId });
        res.status(200).json(donations);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
