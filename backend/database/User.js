const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    role: {
        type: String,
        enum: ['donor', 'recipient'],
        required: true
    },
    uniqueId: {
        type: String,
        required: function() { return this.role === 'recipient'; }
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
