const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: String,
  password: String,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
