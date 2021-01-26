const express = require("express");
const router = express.Router(); // Code: 02
const faker = require('faker');
const Post = require("../../models/Post");

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

// Create Fake Post 
// faker: https://www.npmjs.com/package/faker
router.post('/generate-faker-posts', (req, res) => {
  for (let i = 0; i < req.body.amount; i++){
    let post = new Post(); 
    post.title = faker.name.title(); 
    post.status = 'public'; 
    post.allowComments = faker.random.boolean(); 
    post.body = faker.lorem.sentence(); 

    // post.save().then(savedPost => { }); 
    post.save(function (err) {
      if (err) throw err;
    }); 
    
    res.redirect('/admin'); 
  }
}); 

// Dashboard 
router.get("/dashboard", (req, res) => {
//   res.send("Hello Method Get");
  res.render('admin/dashboard');
});

module.exports = router; // router get from 02