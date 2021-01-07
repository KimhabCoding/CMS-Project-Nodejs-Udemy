const log = console.log; 

// Output | Write 
process.stdout.write('Input your name: '); 

// Scan Input and Pass it out | Read
process.stdin.on('data', function (answer) {
    log(answer.toString()); 
    process.exit(); 
});

// More about process: https://nodejs.org/docs/latest-v14.x/api/process.html
