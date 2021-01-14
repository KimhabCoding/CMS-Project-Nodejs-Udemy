const log = console.log,
    PORT = 3022, 
    http = require('http'),
    fs = require('fs'); 

http.createServer((req, res) => {
    // log(req.method); 
    // log(req);

    if (req.url === '/') {
        fs.readFile('./13.readfile.html', 'UTF-8', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' }); 
        res.end('404 Error could not found.'); 
    }
}).listen(PORT);  

