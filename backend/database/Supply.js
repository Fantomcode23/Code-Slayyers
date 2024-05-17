const mongoose = require('mongoose');

const SupplySchema = new mongoose.Schema({
    recipientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    expiryDate: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('Supply', SupplySchema);
