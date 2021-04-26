const express = require('express');
const Book = require('../models/book');
const { nanoid } = require('nanoid');
const router = express.Router();
const moment = require('moment');
const app = express();

//  Добавляет книгу в базу

router.post('/book', async (req, res) => {
  let { creator, info, adress, latitude, longitude } = req.body
  let book = await Book.create({
    id: nanoid(),
    name: String(req.body.name),
    info: info,
    creator: creator,
    adress: adress,
    latitude: latitude,
    longitude: longitude,
    moovings: {
      userName: creator,
      adress: adress,
      latitude: latitude,
      longitude: longitude,
    }
  });
  await book.save();
  res.json(book);
});

// Выдаёт массив книг, если пользователь имеет к ним отношение

//  router.get('/books', async (req, res) => {
//  // какая-то логика
//   res.end();
// });





module.exports = router;
