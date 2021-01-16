const events = require('events'); 
const log = console.log; 
const emitter = new events.EventEmitter(); 

emitter.on('newEvent', (message) => {
    log(`Message: ${message}`);
}); 

emitter.emit('newEvent', 'Hello guys this is Mr.HKimhab')

// log(emitter); 

/*  More about 
    - events: https://nodejs.org/docs/latest-v14.x/api/events.html
    - WebSocketServer: https://www.npmjs.com/package/ws

*/