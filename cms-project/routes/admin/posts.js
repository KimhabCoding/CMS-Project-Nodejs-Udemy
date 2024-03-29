const express = require("express");
const router = express.Router(); // Code: 02
const Post = require("../../models/Post");
const { isEmpty } = require("../../helpers/upload_helper");
const log = console.log;

// https://expressjs.com/en/4x/api.html#app.all

router.all("/*", (req, res, next) => {
  // app.locals: https://expressjs.com/en/api.html#app.locals
  // laytouts is a folder && 'admin' is a file
  // app.locals.layout: https://github.com/express-handlebars/express-handlebars
  req.app.locals.layout = "admin";
  next();
});

router.get("/", (req, res) => {
  Post.find({}).then((posts) => {
    res.render("admin/posts", { posts: posts });
  });

  // res.render('admin/posts');
});

/* router.get('/index', (req, res) => {
  res.render('/admin/posts/index');  
});  */

// Create Post
router.get("/create", (req, res) => {
  res.render("admin/posts/create", { titlehead: "Create Post" });
});

// Method post to create post
router.post("/create", (req, res) => {

  // log(req.files); 
  let file = req.files.file; 
  let filename = Date.now() + '-' + file.name; 
  
  if (!isEmpty(req.files)) {
    /* let file = req.files.file; 
    let filename = Date.now() + '-' + file.name;  */

    file.mv('./public/uploads/' + filename, (err) => {
      if (err) throw err;
    }); 
  }
  else {
    log('It is empty.'); 
  }

  let allowComments = true;

  // log(req.body.allowComments);

  if (req.body.allowComments) {
    allowComments = true;
  } else {
    allowComments = false;
  }

  const newPost = new Post({
    title: req.body.title,
    status: req.body.status,
    allowComments: allowComments,
    body: req.body.body,
    file: filename
  });

  newPost
    .save()
    .then((savedPost) => {
      res.redirect("/admin/posts");
    })
    .catch((error) => {
      log("Could not save data");
    });
  // Output req.body
  // log(req.body);
});

// Edit or Update Post 
router.get('/edit/:id', (req, res) => {

  // Get old data in edit form 
  Post.findOne({ _id: req.params.id }).then(post => {
    res.render('admin/posts/edit', { post: post });
  });

  // res.send(req.params.id); 
  // res.render('admin/posts/edit'); 

}); 

// Method Update Post | Put Method to update post 
router.put('/edit/:id', (req, res) => {

  // Get old data in edit form 
  Post.findOne({ _id: req.params.id })
    .then(post => {
      if (req.body.allowComments) {
        allowComments = true;
      }
      else {
        allowComments = false;
      }
      
      post.title = req.body.title;
      post.status = req.body.status;
      post.allowComments = allowComments;
      post.body = req.body.body;
      
      // Save data after edit data 
      post.save().then(updatedPost => {
        res.redirect('/admin/posts'); 
      }); 
      
      // res.render('admin/posts/edit', { post: post }); 
    });
  // res.send('It works'); 
}); 

// Delete Post 
router.delete('/:id', (req, res) => {
  Post.remove({ _id: req.params.id })
    .then(result => {
      res.redirect('/admin/posts'); 
    }); 
}); 

module.exports = router; // router get from 02
