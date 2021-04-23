const express = require('express');
const Book = require('../models/book');

const router = express.Router();

router.get('/:userName', async (req, res) => {
  const userName = req.params.userName;
  const userBooks = await Book.find({ creator: userName });
  if (!userBooks) res.status(500).end();
  res.json(userBooks);
  })

router.get('/', async (req, res) => {
let books = await Book.find()
console.log(books);
  res.json({ books });
})


module.exports = router;
