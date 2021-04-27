const express = require('express');
const Book = require('../models/book');
const { nanoid } = require('nanoid/async');
const router = express.Router();
const moment = require('moment');
const app = express();

//  Добавляет книгу в базу

router.post('/book', async (req, res) => {
  let { creator, info, adress, latitude, longitude } = req.body;

  let runWhile = true;

  while (runWhile) {
    const id = await nanoid(7);
    const findItem = await Book.find({ id });
    if (!findItem) {
      runWhile = false;
    }
  }

  console.log(id);
  let book = await Book.create({
    id,
    name: String(req.body.name),
    author: String(req.body.author),
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
    },
  });

  console.log(' book ==>', book);
  res.json(book);
});

// Выдаёт массив книг, если пользователь имеет к ним отношение

//  router.get('/books', async (req, res) => {
//  // какая-то логика
//   res.end();
// });

module.exports = router;
