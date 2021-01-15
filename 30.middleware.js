const express = require('express'),
    log = console.log,
    path = require('path'); 

        /*  process.env.PORT || 3022
        default on 3022 , if your run node yourfile (25.ex..js) with 'node PORT=3024 25.express-server.js'  
        so it run on your customize port 3024 
    */
PORT = process.env.PORT || 3022; 

let app = express(); 


// GET /style.css etc
// app.use(express.static(path.join(__dirname, 'public'))); 

// 'css' is folder in public folder 
app.use(express.static('public')); 
app.use('/css', express.static(__dirname + '/public')); 

// log(app.use('/css', express.static(__dirname + './public/style.css'))); 

// log(app.use('/css')); 

app.use((req, res, next) => {
    log("It's middleware");     
    log('Time: ', Date.now()); 
    next(); 
}); 

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nodejs ReadFile | Readfile Nodejs </title>
    <link rel="stylesheet" href="css/style.css">
    
</head>

<body>
    <h1>Hello It's ReadFile from Nodejs</h1>
</body>

</html>`);
}); 

app.listen(PORT); 

log('Server is running now.');

/*  More about 
    - middleware app.use: https://expressjs.com/en/5x/api.html#app.use
    - static-files: https://expressjs.com/en/starter/static-files.html
*/
