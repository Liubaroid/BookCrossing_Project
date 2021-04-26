const createError = require('http-errors');
const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const FileStore = require("session-file-store")(session);
const { cookiesCleaner } = require("./authConfiq");
const MongoStore = require('connect-mongo');
const cors = require('cors');

const { connect, dbPath } = require('./connectDb');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const booksRouter = require('./routes/books.js');

const app = express();
connect();

app.use(
  cors({
  origin: true,
  credentials: true,
  })
  ); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(
  session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 600000 },
    store: MongoStore.create({ mongoUrl: dbPath }),
  })
);

// app.use(
//   session({
//     store: new FileStore(),
//     key: "user_sid",
//     secret: "anything here",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       expires: 6000000
//     }
//   })
// );

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);

app.use(cookiesCleaner);

app.listen(8080, () => {
  console.log('Server Started');
});

module.exports = app;
