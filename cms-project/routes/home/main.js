const express = require("express");
const router = express.Router(); // Code: 02

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