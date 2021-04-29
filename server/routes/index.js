const express = require("express");
const Book = require("../models/book");
const { nanoid } = require("nanoid/async");
const router = express.Router();
const moment = require("moment");
const app = express();

//  Добавляет книгу в базу

router.post("/book", async (req, res) => {
  let {
    creator,
    info,
    adress,
    latitude,
    longitude,
    author,
    name,
    description,
  } = req.body;

  console.log("=======>>>> NEW BOOK!!!!");

  let runWhile = true;
  let id = null;

  while (runWhile) {
    primaryId = await nanoid(7);
    // даёт случайный символ от 1 до 9
    const rndDigint = Math.round(Math.random()) * 9;
    //заменяет пробелы и подчёркивания на эту цифру
    id = primaryId.replace(/[-_]/g, rndDigint);
    const findItem = await Book.find({ id });
    if (!findItem.length) runWhile = false;
  }

  console.log(" NEW ID  ===>>", id);

  try {
    let book = await Book.create({
      id,
      name: name,
      description: description,
      author: author,
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

    await book.save();
    console.log(" book ==>", book);
    res.json(book);
  } catch (e) {
    console.log("======>");
    console.log(e);
    res.send(null);
  }
});

// Выдаёт массив книг, если пользователь имеет к ним отношение

//  router.get('/books', async (req, res) => {
//  // какая-то логика
//   res.end();
// });

module.exports = router;
