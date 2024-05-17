const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const donationRoutes = require('./routes/donationRoutes');
const supplyRoutes = require('./routes/supplyRoutes');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/hackathon', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use('/api/auth', authRoutes);
app.use('/api', donationRoutes);
app.use('/api', supplyRoutes);

app.listen(3002)
