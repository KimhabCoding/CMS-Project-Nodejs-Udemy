const express = require("express");
const router = express.Router(); // Code: 02


router.all('/*', (req, res, next) => {
  // app.locals: https://expressjs.com/en/api.html#app.locals
  // laytouts is a folder && 'admin' is a file 
  // app.locals.layout: https://github.com/express-handlebars/express-handlebars
  req.app.locals.layout = 'home'; 
  next(); 
}); 

// Get
router.get("/", (req, res) => {
//   res.send("Hello Method Get");
  res.render('home/index');
});

// About
router.get("/about", (req, res) => {
  res.render('home/about');
});

// Register 
router.get("/register", (req, res) => {
  res.render('home/register');
});

// Login 
router.get("/login", (req, res) => {
  res.render('home/login');
});

module.exports = router; // router get from 02