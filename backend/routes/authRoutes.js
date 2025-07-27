// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Registration Route
router.post('/register', (req, res, next) => {
  const { name, phone, dob, email, address, role,password } = req.body;

  console.log("🔍 Received from frontend:", req.body);

  // Validation check
  //if (!name || !phone || !dob || !email || !address || !role || !password) {
  //  return res.status(400).json({ message: "All fields are required" });
//}

  // Continue to controller if valid
  next();
}, register);

// Login Route
router.post('/login', login);

module.exports = router;
