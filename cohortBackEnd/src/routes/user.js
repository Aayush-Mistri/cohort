import express from 'express';
import protect from '../middleware/auth-middleware.js';

const router = express.Router();

// GET /api/users/profile
router.get('/profile', protect, async (req, res) => {
  try {
    res.json({
      user: {
        id: req.user._id,
        name: req.user.name,
        username: req.user.username,
        email: req.user.email
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

export default router;
