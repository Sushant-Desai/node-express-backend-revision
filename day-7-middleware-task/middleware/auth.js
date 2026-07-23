// Custom authentication middleware for learning purposes
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. Please provide an Authorization header.'
    });
  }

  // Demo tokens for learning
  if (token === 'secret-token') {
    req.user = { id: 1, name: 'Sushant', role: 'admin' };
    return next();
  }

  if (token === 'user-token') {
    req.user = { id: 2, name: 'Riya', role: 'user' };
    return next();
  }

  return res.status(403).json({
    success: false,
    message: 'Invalid token.'
  });
};

module.exports = authMiddleware;
