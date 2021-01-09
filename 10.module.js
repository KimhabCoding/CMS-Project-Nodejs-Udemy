const log = console.log; 
const object = require('./10.lib'); 

module.exports.title = 'Nodejs'; 
module.exports.title1 = 'Angular'; 
module.exports.function = function () {
    log('Hello from function'); 
}; 

// log(module); 
log(module.exports.function); 

// use cal() 
// log(cal(10, 22)); 
log(object.cal(10, 22)); 
