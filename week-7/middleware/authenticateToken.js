const { verifyToken } = require('../utils/jwt');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(403);

  const payload = verifyToken(token);
  if (!payload) return res.sendStatus(403);

  req.user = payload;
  next();
};

module.exports = authenticateToken;
