function cookiesCleaner(req, res, next) {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
}

const sessionChecker = (req, res, next) => {
  if (req.session.user) {
    res.redirect("/books");
  } else {
    next();
  }
};

module.exports = {
  sessionChecker,
  cookiesCleaner
};
