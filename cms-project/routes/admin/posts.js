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

router.get('/', (req, res) => {
  res.send('It works.'); 
});

/* router.get('/index', (req, res) => {
  res.render('/admin/posts/index');  
});  */

router.get('/create', (req, res) => {
  res.render('admin/posts/create'); 
}); 

module.exports = router; // router get from 02