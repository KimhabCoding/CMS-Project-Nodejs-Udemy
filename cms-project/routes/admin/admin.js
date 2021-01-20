const express = require("express");
const router = express.Router(); // Code: 02

// https://expressjs.com/en/4x/api.html#app.all 

router.all('/*', (req, res, next) => {
  // app.locals: https://expressjs.com/en/api.html#app.locals
  // laytouts is a folder && 'admin' is a file 
  // app.locals.layout: https://github.com/express-handlebars/express-handlebars
  req.app.locals.layout = 'admin'; 
  next(); 
}); 

// Get
router.get("/", (req, res) => {
//   res.send("Hello Method Get");
  res.render('admin/index');
});

module.exports = router; // router get from 02