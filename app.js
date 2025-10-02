const sayHello = require('./hello.js');
// console.log(myModule.functionModule);

sayHello('John');
sayHello('Peter');
sayHello('Rohit');

const appPrefixes = require('./modern.js');

appPrefixes('Flask');
appPrefixes('Lights');
appPrefixes('Bowls');

// const myModule = require('./module.js');

// console.log(myModule.foo); // logs 'bar'
// myModule.functionModule();
// myModule.functionModule2();

const myModule = require('./module.js');
// const {list} = require('./module.js');
console.log(myModule.foo);
myModule.functionModule();
myModule.functionModule2();
console.log(myModule.list[1]);
// console.log(list[2]);

// const os = require('os'); //os module provide information about the operating system
// const systemUptime = os.uptime(); //to check the number of seconds the system has been running since last shut down
// const userInfo = os.userInfo();
// const otherInformation = {
//     name: os.type(),
//     release: os.release(),
//     totalMemory: os.totalmem(),
//     freeMemory: os.freemem(),
// }

// console.log(systemUptime);
// console.log(userInfo);
// console.log(otherInformation);

// const path = require('path');

// const MyPath = '/C:\Users\USER\Desktop\NODEJSTUT/app.js'

// const PathInfo = {
//     fileName: path.basename(MyPath),
//     folderName: path.dirname(MyPath),
//     fileExtension: path.extname(MyPath),
//     absoluteOrNot: path.isAbsolute(MyPath),
//     detailedInfo: path.parse(MyPath),
// }
// console.log(PathInfo);

// console.log(path.join('Letty','Remaining','Edd.example')); //concatenates the declared variables as path seperated by backlash
// console.log(path.resolve('Letty','Remaining','Edd.example')); // appends an additional concatenated path to the OS file path

const fs = require('fs');

// fs.mkdir ('./folder', (err) => {
//     if (err){
//         console.log(err);
//     } else {
//         console.log('Folder created successfully!');
//     }
// });

// fs.mkdir ('./storage', (err) => {
//     if (err){
//         console.log(err);
//     } else {
//         console.log('Storage created successfully!');
//     }
// })

// fs.mkdir('./documents', (error) => {
//     if (error){
//         console.log(error);
//     } else {
//         console.log('Folder created successfully!');
//     }
// })
// //synchronous method of reading data in Node
// try {
//     const documentData = fs.readFileSync('./folder/jargon.txt', 'utf-8');
//     console.log('Operation Successful!');
//     console.log(documentData);
// fs.readFile('./folder/testing.txt', (error, data) => {
//  if (error){
//     console.log(error);
//  } else {
//     // console.log(data); //returns buffer in numbers
//     console.log(data.toString()); //returns the exact string or content of the file
//  }
// })

fs.writeFile('./folder/streamfile.txt', '', () => {
    console.log('File written successfully!');

})

// if (!fs.existsSync('./storage')){ //fs module existsSync checks if a folder is available before creating another one
//     fs.mkdir('./storage', (err) => {
//         if (err){
//             console.log(err);
//         } else {
//             console.log('Folder created successfully');
//         }
//     })
// } else {
//     fs.rmdir('./storage', () => { //rmdir is used to remove directories
//          if (err){
//             console.log(err);
//         }
//         // else {
//         console.log('Folder deleted successfully');
//         // }
//     })
// }

// } catch (err){
//     console.log('An error occured!');
//     console.log(err);
// }
// //to read the content of a folder
// fs.readdir('./folder', (err, files) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('Directory read successfully! Here are the files:');
//     console.log(files);
// })

// const data = " Just continue from where we stop"

// // fs.writeFile ('./folder/jargon.txt', data, {flag: 'a'}, (err) => {
// //     if (err){
// //         console.log(err);
// //         return;
// //     } else {
// //         console.log('File written successfully!');
// //     }
// // })
// //To rename a file
// // fs.rename('./folder/jargon.txt', './folder/testing.txt', (err) => {
// //     if (err){
// //         console.log(err);
// //         return;
// //     } else {
// //         console.log('File renamed successfully!');
// //     }
// // })

// //to Delete a file
// fs.unlink('./folder/jargon.txt', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('File Deleted Successfully!')
// })

// //import "events" module and creating an instance of the EventEmitter Class
// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();
// // Listener Function - welcomeUser()
// const welcomeUser = () => {
//     console.log('Hi There, Welcome to the server!');
// }
// // Listening for the userJoined event using the on() method
// myEmitter.on('userJoined', welcomeUser);
// // Emitting the userJoined event using the emit() method
// myEmitter.emit('userJoined');


// const http = require('http');
// const server = http.createServer ((req, res) => {
//     res.end("Hello Node!");
// })

// server.listen(5000, () => {
//     console.log('Server listening at port 5000');
// })
// //writeFile is used to create a new file inside an existing folder. 
// // it requires three arguments: path, data, a callback function
// //adding {flag: 'a'} after the second argument tell the writeFile 
// // function to continue instead starting the write afresh
// // const os = require('os'); 
// const systemRunTime = os.uptime();
// console.log(systemRunTime);
// console.log(__dirname); //to store the path to current working directory
// console.log(__filename); //to store/fetch the path to current working file
