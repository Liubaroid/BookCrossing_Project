const mongoose = require('mongoose');
const { Types } = mongoose

const bookSchema = new mongoose.Schema({
  id: String,
  name: { type: String, required: true },
  info: String,
  adress: String,
  isFound: Boolean,
  comments: [{
    userName: String,
    comment: String
  }],
  moovings: [{
    userName: String,
    coordinates: Number
  }],
  creator: { type: Types.ObjectId },
  founders: [{ type: Types.ObjectId }]

});

module.exports = mongoose.model('Book', bookSchema);
