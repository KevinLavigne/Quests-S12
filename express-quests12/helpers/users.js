const jwt = require('jsonwebtoken');

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const calculateToken = (userEmail = '', userId) => {
	return jwt.sign({ email: userEmail, user_id: userId }, PRIVATE_KEY);
};

module.exports = { calculateToken };
