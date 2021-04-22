const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: String,
  name: { type: String, required: true },
  info: String,
  adress: String,
  latitude: Number,
  longitude: Number,
  isFound: Boolean,
  comments: [{
    userName: String,
    comment: String
  }],
  moovings: [{
    userName: String,
    latitude: Number,
    longitude: Number
  }],
  creator: String,
  founders: String,
  currentOwner: String

});

module.exports = mongoose.model('Book', bookSchema);
