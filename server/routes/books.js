const express = require('express');
const Book = require('../models/book');

const router = express.Router();

router.get('/', async (req, res) => {
let books = await Book.find()
console.log(books);
  res.json({ books });
})


module.exports = router;
