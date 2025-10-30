const fs = require('fs');
const superagent = require('superagent');

// fs.readFile(`${__dirname}/final/dog.txt`, 'utf8', (err, data) => {
//   console.log(`Breed: ${data}`);
//   superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res) => {
//     console.log(res.body);
//   });
// });

fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
    if (err) return console.log(err);
    console.log(`Breed: ${data}`);
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res) => {
    if (err) return console.log(err);
    console.log(res.body.message);
        // fs.writeFile('./promises/dog-image.txt', res.body.message, {flag: 'a'}, (err) => {
        //     console.log('File written sucessfully!')
        // }) -- add flag if you want the file to continue from where you stopped
        fs.writeFile('./promises/dog-image.txt', res.body.message, (err) => {
            console.log('File written sucessfully!')
        })
    });
});


console.log(__dirname);

