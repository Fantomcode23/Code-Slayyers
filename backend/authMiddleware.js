// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, 'Harsha@123'); // Use your actual secret key
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Failed to authenticate token' });
    }
};

module.exports = authMiddleware;
