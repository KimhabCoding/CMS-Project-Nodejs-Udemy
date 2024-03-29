const express = require("express");
const app = express();
const path = require("path");
const exphbs  = require('express-handlebars');
const log = console.log;
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); // https://www.npmjs.com/package/body-parser
const Handlebars = require('handlebars'); 
// fix allowInsecurePrototypeAccess is not a function by add allowInsecurePrototypeAccess ---> { allowInsecurePrototypeAccess } 
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access'); 

// https://www.npmjs.com/package/method-override
const methodOverride = require('method-override'); 

// https://www.npmjs.com/package/express-fileupload
const upload = require('express-fileupload'); 
      
mongoose.Promise = global.Promise; 
// More about Using Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

// Connection URL
const url = 'mongodb://localhost:27017/cms';

// BodyParser   
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

// mongoose.connect(url, { useNewUrlParser: true }); 
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}); 
mongoose.connection
    .once('open', () => log('Connected'))
    .on('error', (err) => {
        
        log(`Could not connect`, err); 
    });  

// select is a function in file (handlebars-helpers)
const { select } = require('./helpers/handlebars-helpers');     

// Express-handlebars https://github.com/express-handlebars/express-handlebars
// defaultLayout: https://github.com/express-handlebars/express-handlebars#defaultlayout
// 'home' is folder 
app.engine('handlebars',
  exphbs({
    defaultLayout: 'home', 
    helpers: {select: select}, 
    // Issue in Access has been denied to resolve the property
    //"---" because it is not an "own property" of its parent.
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  }));
app.set('view engine', 'handlebars');

// Upload Middlware 
app.use(upload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

// Path: https://expressjs.com/en/api.html#app.use
// GET /style.css etc
app.use(express.static(path.join(__dirname, "public")));

// Method Override 
app.use(methodOverride('_method')); 

// https://expressjs.com/en/guide/routing.html
const home = require('./routes/home/home'); 
const admin = require('./routes/admin/admin'); 
const posts = require('./routes/admin/posts'); 

app.use('/', home); 
app.use('/admin', admin); 
app.use('/admin/posts', posts); 

const PORT = 3024 || process.env.PORT;

app.listen(PORT, () => {
  log(`Running on port ${PORT}`);
});
