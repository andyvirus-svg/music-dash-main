const express = require('express');
const uploadRoutes = require('./upload');
const authRoutes = require('./auth');
const songRoutes = require('./song');

const router = express.Router();

// Use the individual route files
router.use('/upload', uploadRoutes);
router.use('/auth', authRoutes);
router.use('/song', songRoutes);

module.exports = router;