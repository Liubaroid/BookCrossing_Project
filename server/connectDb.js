// Пусть полежит здесб

const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  };

const dbPath = 'mongodb+srv://c:p@cluster0.qju1t.mongodb.net/bookcrossing?retryWrites=true&w=majority';

const connect = () => {
  mongoose.connect(dbPath, options)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err))
  } 

module.exports = { connect, dbPath };
