const emitter = require('./modules/SendEmail'); 
const log = console.log; 

emitter.on('emailEvent', (message) => {
    log(`Message: ${message}`); 
}); 

/*  emitter.on(eventName, listener)
        Added in: v0.1.101
        eventName <string> | <symbol> The name of the event.
        listener <Function> The callback function
        Returns: <EventEmitter> 
*/

emitter.emit('emailEvent', "Check your email inbox.");

/*      emitter.emit(eventName[, ...args])
    Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.
 */

/* log(events); 
log(emitter); */ 

/*  More about 
    - events: https://nodejs.org/docs/latest-v14.x/api/events.html | https://nodejs.org/docs/latest-v14.x/api/events.html#events_emitter_emit_eventname_args
*/