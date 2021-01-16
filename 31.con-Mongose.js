const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  log = console.log; 

  /*  process.env.PORT || 3022
        default on 3022 , if your run node yourfile (25.ex..js) with 'node PORT=3024 25.express-server.js'  
        so it run on your customize port 3024 
  */

PORT = process.env.PORT || 3022; 

let app = express(); 

// body-parser to json 
app.use(bodyParser.json()); 

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false })); // --> https://github.com/expressjs/body-parser#readme

// 'css' is folder in public folder 
app.use(express.static('public')); 

// '/assets is prefix e.g: localhost:3022/assets/'
app.use('/assets', express.static(__dirname + '/public')); 

app.use((req, res, next) => {
    log("It's middleware");     
    log('Time: ', Date.now()); 
    next(); 
}); 

// POST /login gets urlencoded bodies
app.post('/post', function (req, res) {
  res.send('welcome, ' + req.body.email);
});

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.strictEqual(null, err);
  log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});


app.listen(PORT); 

log('Server is running now.');

// Mongodb in expressjs: https://expressjs.com/en/guide/database-integration.html#mongodb