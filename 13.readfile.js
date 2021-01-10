const log = console.log; 
const fs = require('fs'); 

fs.readdir('./', (err, content) => {
    if (err) return err; 
    // log(content[0]); // output: .git  
    log(content); 
}); 
// log(fs); 

fs.readFile('13.readfile.html', 'UTF-8', (err, content) => {
    log(content); 
}); 

// More about readfile: 
// https://nodejs.org/docs/latest-v14.x/api/fs.html