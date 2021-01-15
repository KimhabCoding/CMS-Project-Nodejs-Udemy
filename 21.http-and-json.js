const log = console.log,
    PORT = 3022, 
    http = require('http'),
    https = require('https'),
    fs = require('fs'); 
const url = 'https://jsonplaceholder.typicode.com/posts'; 

http.createServer((req, serverRes) => {
    if (req.method === 'GET' && req.url === '/posts') {
        
        https.get(url, (httpRes) => {
            httpRes.on('data', data => {
                httpRes.setEncoding('UTF-8');
                // log(data);
                // To get data on on web or write it 
                serverRes.write(data); 
            });

            // end request | after finish req 
            httpRes.on('end', () => {
                serverRes.end();
                log('Time out');
            }); 
        }); 
    }
    else {
        serverRes.writeHead(404, { 'Content-Type': 'text/plain' }); 
        serverRes.end('404 Could not found it.');
    }

}).listen(PORT); 
log(`Server is listening on port ${PORT}`); 