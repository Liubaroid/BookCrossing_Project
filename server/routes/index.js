const express = require('express');
const Book = require('../models/book');
const {nanoid} = require('nanoid');
const router = express.Router();
const moment = require('moment'); 
const app = express();

 //  Добавляет книгу в базу

 router.post('/book', async (req, res) => {
  //  id = nanoid();
  //  creator = String(req.body.creator);
  //  name = String(req.body.name);
  //  info = String(req.body.info);
  //  adress = String(req.body.adress);
  //  latitude = Number(req.body.latitude);
  //  longitude = Number(req.body.longitude);
  //  await Book.create({ creator, name, info, adress, latitude, longitude, id });
  let book = await Book.create({
    id: nanoid(),
    name: String(req.body.name),
    info: String(req.body.info),
    adress: String(req.body.adress),
    latitude: Number(req.body.latitude),
    longitude: Number(req.body.longitude),
    creator: String(req.body.creator),
    currentOwner: ''
   });
   res.json(book);
 });

 // Выдаёт массив книг, если пользователь имеет к ним отношение

//  router.get('/books', async (req, res) => {
//  // какая-то логика
//   res.end();
// });

 



module.exports = router;
