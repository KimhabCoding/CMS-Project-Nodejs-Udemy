const log = console.log,
    PORT = 3022, 
    http = require('http'),
    https = require('https'),
    fs = require('fs'); 


http.createServer((req, res) => {
    let body = ''; 
    if (req.method === 'GET') {
        
        // log("It's working."); 
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        fs.readFile('./23.form-http.html', 'UTF-8', (err, data) => {
            if (err) throw err;
            res.write(data); 
            res.end(); 
        }); 

    } else if (req.method === 'POST') {
        req.on('data', (data) => {
            body += data; 
        }); 

        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/html' }); 
            res.write(body, () => {
                res.end(); 
            }); 
        }); 

    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' }); 
        res.end('404 Could not found it.');
    }

}).listen(PORT); 
log(`Server is listening on port ${PORT}`); 