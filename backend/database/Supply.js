
const mongoose = require('mongoose');

const supplySchema = new mongoose.Schema({
    category: { type: String, required: true },
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    recipientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Supply', supplySchema);
