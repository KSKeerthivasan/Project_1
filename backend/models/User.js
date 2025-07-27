// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: { type: String, unique: true },
  dob: String,
  address: String,
  role: { type: String, enum: ['vendor', 'seller'] },
  password: String
});

module.exports = mongoose.model('User', userSchema);