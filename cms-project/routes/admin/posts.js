const express = require("express");
const router = express.Router(); // Code: 02
const PostModel = require('../../models/Post'); 
const log = console.log; 

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

// Create Post 
router.get('/create', (req, res) => {
  res.render('admin/posts/create'); 
}); 

// Method post to create post 
router.post('/create', (req, res) => {
  let allowComments = true; 
  var rb = req.boby; 
  
  // req.body.allowComments ? true : false;  
  if (rb.allowComments) {
    allowComments = true; 
  } else {
    allowComments = false; 
  }

  PostModel({
    title: req.body.title,
    status: req.body.status,
    allowComments: req.body.allowComments,
    body: req.body.body
  }); 
  // Output req.body 
  log(req.body); 
  // res.send('admin/posts/create'); 
});


module.exports = router; // router get from 02