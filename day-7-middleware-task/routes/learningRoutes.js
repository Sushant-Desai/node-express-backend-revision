const express = require('express');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Route-level middleware example
const checkAdmin = (req, res, next) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required.'
    });
  }

  next();
};

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'This route shows a basic router example.'
  });
});

router.get('/profile', authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: 'Profile route reached successfully.',
    user: req.user
  });
});

router.get('/dashboard', authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: 'Dashboard route reached successfully.',
    user: req.user
  });
});

router.get('/admin', authMiddleware, checkAdmin, (req, res) => {
  res.json({
    success: true,
    message: 'Admin panel accessed.',
    user: req.user
  });
});

module.exports = router;
