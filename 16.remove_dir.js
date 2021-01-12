const log = console.log; 
const fs = require('fs'); 

// remove folder 
fs.rmdirSync('./test'); 


try {
    // remove file 
    fs.unlinkSync('./test/test.js');
} catch (err){
        log(err + 'Here is an error'); 
}

// log(fs); 
log('Dir remove sucessfully!'); 