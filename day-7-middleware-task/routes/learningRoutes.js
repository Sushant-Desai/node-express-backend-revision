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

// Use router-level middleware so every route below requires authentication.
router.use(authMiddleware);

router.get('/profile', (req, res) => {
  res.json({
    success: true,
    message: 'Profile route reached successfully.',
    user: req.user
  });
});

router.get('/dashboard', (req, res) => {
  res.json({
    success: true,
    message: 'Dashboard route reached successfully.',
    user: req.user
  });
});

// Learner concept: middleware can attach additional data to the request
// object that later route handlers can use.
const attachLearnerInfo = (req, res, next) => {
  req.learner = {
    name: req.user.name,
    level: req.query.level || 'beginner',
    topic: req.query.topic || 'middleware'
  };
  next();
};

router.get('/learner', attachLearnerInfo, (req, res) => {
  res.json({
    success: true,
    message: 'Learner info route reached successfully.',
    learner: req.learner
  });
});

router.get('/admin', checkAdmin, (req, res) => {
  res.json({
    success: true,
    message: 'Admin panel accessed.',
    user: req.user
  });
});

router.get('/settings', (req, res) => {
  res.json({
    success: true,
    message: 'Settings route reached successfully.',
    user: req.user
  });
});

module.exports = router;
