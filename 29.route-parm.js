const express = require('express'),
    log = console.log; 

        /*  process.env.PORT || 3022
        default on 3022 , if your run node yourfile (25.ex..js) with 'node PORT=3024 25.express-server.js'  
        so it run on your customize port 3024 
    */
PORT = process.env.PORT || 3022; 

let app = express(); 

app.get('/', (req, res) => {
    res.send('HOME');
}); 

app.get('/post/:id/category/:cat_id', (req, res) => {
    res.send(
        `<p>Post id is ${req.params.id}</p>
        <p>Category id is ${req.params.cat_id}</p>
        `
    ); 
}); 

app.listen(PORT); 

log('Server is running now.');

// Wanna know express: https://expressjs.com/en/api.html