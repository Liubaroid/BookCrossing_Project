const express = require('express');
const Book = require('../models/book');

const router = express.Router();

router.get('/:userName', async (req, res) => {
  const userName = req.params.userName;
  const userBooks = await Book.find({ creator: userName });
  const takenBooks = await Book.find({ currentOwner: userName });
  // console.log(userBooks);
  if (!userBooks || !takenBooks) res.status(500).end();
  res.json({userBooks, takenBooks});
  })

router.get('/id/:id', async (req, res) => {
    const id = req.params.id;
    const book = await Book.findOne({ _id: id });
    res.json(book);
    })
  
router.patch('/take', async (req, res) => {
  const { currentOwner, id } = req.body;
  // console.log(currentOwner, id );
  const book = await Book.findOne({_id: id});
  book.currentOwner = currentOwner.userName,
  book.founders.push(currentOwner.userName),
  book.isFound = true,
  await book.save()
  res.status(200).json({success: true})
})

router.patch('/give', async (req, res) => {
  const { id, adress, latitude, longitude } = req.body;
  const book = await Book.findOne({_id: id});
  book.isFound = false,
  book.adress = adress,
  book.latitude = latitude,
  book.longitude = longitude
  await book.save()
  res.status(200).json({success: true})
})


router.post('/comment', async (req, res) => {
  const { login, comment, bookId } = req.body;
  console.log(req.body);
  const book = await Book.findOne({_id: bookId});
  book.comments.push({ userName: login, comments: comment }),
  await book.save();
  res.status(200).json({success: true})
})

router.get('/comment/:bookId', async (req, res) => {
  const bookId = req.params.bookId;
  console.log(bookId);
  const book = await Book.findOne({_id: bookId});
  res.status(200).json(book.comments)
})

//проверка наличия книги по id

router.get('/take/:id', async (req, res) => {
 const id = req.params.id
 console.log(id);
 const book  = await Book.findOne({ _id: id });
 console.log(book);
  if (book) {
    res.status(200).json({success: true})
  } res.status(404)
  })

router.get('/', async (req, res) => {
let books = await Book.find()
  res.json({ books });
})


module.exports = router;
