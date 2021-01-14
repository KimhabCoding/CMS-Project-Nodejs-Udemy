const https = require('https'); 
const fs = require('fs'); 
const log = console.log;  

const url = 'https://jsonplaceholder.typicode.com/posts'; 
// log(http); 

https.get(url, res => {
    res.setEncoding('UTF8');
    let body = '';
    
    res.on('data', data => {
        body += data;
    });

    res.on('end', () => {

        body = JSON.parse(body); 
        log(`${body[0].title}`); 
        /* 
        fs.writeFile('data.json', body, 'UTF8', (err) => {
            if (err) return err;
            log('Done and created file'); 
        }); */
    });
}); 