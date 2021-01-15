const express = require('express'),
    log = console.log,

    /*  process.env.PORT || 3022
        default on 3022 , if your run node yourfile (25.ex..js) with 'node PORT=3024 25.express-server.js'  
        so it run on your customize port 3024 
    */
    PORT = process.env.PORT || 3022; 

let app = express(); 

app.get('/', (req, res)=> {
    res.send('<h1>Hello Routes Nodejs</h1>');
}); 

app.get('/api', (req, res)=> {
    // res.send('<h1>This is API');
    res.json({ name: 'Kimhab Coding' }); 
}); 

app.listen(PORT); 

log('Server is running now.');

// log(express.application.listen); 
// More about express: https://www.npmjs.com/package/express | https://github.com/expressjs/express