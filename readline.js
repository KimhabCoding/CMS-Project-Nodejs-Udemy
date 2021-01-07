const log = console.log; 

let readline = require('readline'); 
let util = require('util'); 

let rl = readline.createInterface(process.stdin, process.stdout); 
// let rltest = readline.createInterface(process.stdin, process.stdout); 

rl.question('What is your name? ', (name) => {
    rl.setPrompt(`${name} how old are you? `); 
    rl.prompt(); 
    rl.on('line', (age) => {
        if (age < 18) {
            util.log(`${name.trim()} because you are ${age} years old, you can't procedd`); 
        } 
        else {
            util.log(`${name.trim()}  is great that you are${age} years old, 
            because now you can enjoy our services.`); 
            rl.close(); 
        }
        
        process.exit(); 
    }); 
}); 
// log(readline); 
// log(rltest); 

/*  More about 
    - readline: https://nodejs.org/docs/latest-v14.x/api/readline.html
    - util: https://nodejs.org/docs/latest-v14.x/api/util.html | https://nodejs.org/docs/latest-v14.x/api/util.html#util_util_log_string
*/