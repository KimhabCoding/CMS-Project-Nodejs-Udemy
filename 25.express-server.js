const express = require('express'),
    log = console.log,
    PORT = 3022; 
let app = express(); 

app.listen(PORT); 

log('Server is running now.')

// log(express.application.listen); 
// More about express: https://www.npmjs.com/package/express | https://github.com/expressjs/express