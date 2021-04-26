const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  // уникальный айдишник должен быть
  id: { type: String, unique: true },

  name: { type: String, required: true },
  info: { type: String, default: '' },
  adress: { type: String, default: '' },
  latitude: { type: Number, default: '' },
  longitude: { type: Number, default: '' },
  isFound: { type: Boolean, default: false },
  comments: [
    {
      userName: { type: String, default: '' },
      comments: { type: String, default: '' },
    },
  ],
  moovings: [
    {
      userName: { type: String, default: '' },
      latitude: { type: Number, default: '' },
      longitude: { type: Number, default: '' },
    },
  ],
  creator: { type: String, default: '' },
  founders: [{ type: String, default: '' }],
  currentOwner: { type: String, default: '' },
});

module.exports = mongoose.model('Book', bookSchema);
