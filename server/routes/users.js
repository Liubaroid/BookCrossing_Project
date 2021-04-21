const express = require('express');
const sha256 = require('sha256');
const User = require('../models/user');

const router = express.Router();
const app = express();

//  Если пользователь есть - высылает json c логином и ай-ди
router.post('/login', async (req, res) => {
 login = String(req.body.login);
 password = String(req.body.password);
  const user = await User.findOne({ login, password: sha256(password) });
  let status = false;
  if (user) {
    req.session.username = login;
    req.session.uid = user._id;
    console.log('LOGIN',req.session.uid);
    status = true;
  }

  res.status(status ? 200 : 401).json(status ? { login: login, id: user._id} : { message: 'Неправильный логин или пароль'});
});

//  Регистрирует нового пользователя в базу
router.post('/register', async (req, res) => {
  login = String(req.body.login);
  password = String(req.body.password);

  const user = await User.findOne({ login });
  
  if (user) {
    res.status(500).json({ message: 'Такой пользователь уже существует' });
    return
  }

  const passwordHashed = sha256(password);
  const usr = await User.create({ login, password: passwordHashed });
  const id = usr._id;
  req.session.username = login;
  req.session.uid = id._id;
  res.status(200).json({ login: login, id: id._id});
});

//  Разрушение сессии
router.get('/exit', (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
});

//  Проверка на auth
router.get('/auth', async(req, res) => {
  const id = req.session.uid;
  console.log('AUTH',id);
  if (!id) {
    res.status(401).end();
    return
  }
 const user = await User.findById(id);
 res.json({ login: user.login, id: id });
});

module.exports = router;
