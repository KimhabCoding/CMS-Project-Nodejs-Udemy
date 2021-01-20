const express = require("express");
const app = express();
const path = require("path");
const exphbs  = require('express-handlebars');
const log = console.log;

// Express-handlebars https://github.com/express-handlebars/express-handlebars
// defaultLayout: https://github.com/express-handlebars/express-handlebars#defaultlayout
// 'home' is folder 
app.engine('handlebars', exphbs({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');

// Path: https://expressjs.com/en/api.html#app.use
// GET /style.css etc
app.use(express.static(path.join(__dirname, "public")));


// https://expressjs.com/en/guide/routing.html
const main = require('./routes/home/main'); 
app.use('/', main); 

const PORT = 3024 || process.env.PORT;

app.listen(PORT, () => {
  log(`Running on port ${PORT}`);
});
