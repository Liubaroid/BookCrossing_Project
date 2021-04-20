// Пусть полежит здесб

const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  };

const dbPath = 'mongodb://localhost:27017/bookcrossing';

const connect = () => {
  mongoose.connect(dbPath, options)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err))
  } 

module.exports = { connect, dbPath };
