const fs = require('fs');
const readStream = fs.createReadStream('./folder/streamfile.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./folder/checking2.txt'); //to create a new stream of data into a file

// readStream.on('data', (chunk) => {
//     console.log('-----NEW CHUNK------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n'); 
//     writeStream.write(chunk);//saving the chunk into the new writestream file specified above
//     // console.log(chunk.toString());
// });

//--OR--

readStream.pipe(writeStream); //an alternative way to pass data directly into the writestream file from the readstream