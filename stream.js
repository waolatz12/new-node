const fs = require('fs');
const server = require('http').createServer();
const readStream = fs.createReadStream('./folder/streamfile.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./folder/checking2.txt'); //to create a new stream of data into a file

server.on('request', (req, res) => {
    fs.readFile('./storage/checking.txt', (err, data) => {
        if (err) console.log(err);
        res.end(data);
    })
})
// readStream.on('data', (chunk) => {
//     console.log('-----NEW CHUNK------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n'); 
//     writeStream.write(chunk);//saving the chunk into the new writestream file specified above
//     // console.log(chunk.toString());
// });

server.listen(8000, '127.0.0.1', () => {
    console.log('This is listening...');
})
//--OR--

readStream.pipe(writeStream); ///an alternative way to pass data directly into the writestream file from the readstream