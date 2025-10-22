const fs = require('fs');
const crypto = require('crypto');

const start = Date.now(); //to declare the current date and time
process.env.UV_THREADPOOL_SIZE = 2; //to reduce the size of the thread pool to 1 from its default 4
setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));
fs.readFile('./folder/testing.txt', () => {
    console.log('I/O finished!');
    console.log('------------------------');
    
    setTimeout(() => console.log('Timer 2 finished'), 0);
    setTimeout(() => console.log('Timer 3 finished'), 3000);
    setImmediate(() => console.log('Immediate 2 finished'));

    process.nextTick(() => console.log('THis is the urgent issue')); 
    //nexttick is part of the microtask queue that get executed after each phase

    //sync version of the crypto function
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, 'Password encryption executed!');

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, 'Password encryption executed!');
    
    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, 'Password encryption executed!');
  
    // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    //     //crypto.pbkdf2 is an encryption function
    //     //password is the secret string
    //     //100000 is the number of alteration
    //     //1024 is the key lenght
    //     //'sha512' is the algorithm used for the encryption
    //     console.log(Date.now() - start, 'Password executed!');
    //     //we subtracted the current time from the time the event starts running to know the amount of seconds it takes to execute this async operation

    // });
   
});

console.log('Hello from the top level coding part!');