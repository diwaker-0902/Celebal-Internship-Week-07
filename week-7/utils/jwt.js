const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

const generateToken = (user) => {
  return jwt.sign({ id: user._id, username: user.username }, secretKey, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken
};
