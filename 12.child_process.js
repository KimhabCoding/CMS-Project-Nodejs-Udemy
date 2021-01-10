const log = console.log; 
// const execute = require('child_process'); 
const execute = require('child_process').exec;

// ls: list, dir: directory 
// execute('ls', (err, stdout) => {
execute('dir', (err, stdout) => {
    if (err) {
        return err; 
    }
    else {
        log(stdout);
    }
}); 

log(execute);

//More about child process: https://nodejs.org/docs/latest-v14.x/api/child_process.html