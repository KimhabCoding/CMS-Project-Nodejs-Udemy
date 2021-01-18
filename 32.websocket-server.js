const WebSocketServer = require('ws').Server;
// const WSS = new WebSocketServer.Server({ port: 3082 });
const WSS = new WebSocketServer({ port: 3082 });

// WSS.on('connection', function connection(ws) {
WSS.on('connection', (ws)=>{
//   ws.on('message', function incoming(message) {
    // console.log('received: %s', message);
  ws.on('message', (message) => {

    if (message === 'close') {
      ws.close(); 
    }
    else {
        WSS.clients.forEach((client) => {
        client.send(message);   
      }); 
    }
    
    console.log('We are connected.');
    
    // message gets from ...document.getElementById('message'); in file: 32.websocket-cleint.js
    console.log(message);
  }); 


  });

//   ws.send('something');
// });

/*  More about 
    - Web Soceket Server: https://github.com/websockets/ws 
 */