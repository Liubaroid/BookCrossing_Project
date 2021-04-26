// const express = require("express");
// const bcrypt = require("bcrypt");
// const { sessionChecker } = require("../authConfiq.js");
// const User = require("../models/user");
// const saltRounds = 10;

// const router = express.Router();

// router.get('/', sessionChecker, (req, res) => {
//   res.redirect('/register')
// })

//  router.post('/register', sessionChecker, async (req, res) => {
//     const { name, password } = req.body;
//     console.log(name, password);
//     try {
//       const newUser = new User({
//         name,
//         password: await bcrypt.hash(password, saltRounds)
//       });
//       await newUser.save();
//       req.session.user = newUser;
//     } catch (error) {
//       console.log(error);
//       res.status(401).end();
//     }
//     res.end()
//   });

//   router.get('/login', sessionChecker, (req, res) => {
//     res.render('login');
//   })
//  router.post('/login', async (req, res) => {
//     const { name, password } = req.body;

//     const user = await User.findOne({ name });

//     if (user && (await bcrypt.compare(password, user.password))) {
//       req.session.user = user;
//       res.redirect('/main');
//     } else {
//       res.redirect('/register');
//     }
//   });



//   router.get('/logout', async (req, res, next) => {
//     if (req.session.user) {
//       try {
//         await req.session.destroy();
//         res.clearCookie("user_sid");
//         res.redirect('/');
//       } catch (error) {
//         next(error);
//       }
//     } else {
//       res.redirect('/login');
//     }
//   });





  
//   module.exports = router;
