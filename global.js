// console.log(global) //to get all methods available on the global object
// setTimeout(() => {
//     console.log('Time is ticking fast!');
//     clearInterval(interval); //used to clear the interval or stop the interval from continous operation
// }, 4000)

// const interval = setInterval(() => { //we add const to this because we want to reuse the function in another
//     console.log('Time is ticking again!');
// }, 1000) 
//setTImeout is one of the methods available on the global onject in node. 
// global.setTimeout(() => {
//     console.log('Time is ticking fast!');
// }, 3000)

////////////////////////////////////////////////////////////////
/// FILES
const fs = require('fs');
const http = require('http');
const url = require('url');


// const readCheck = fs.readFileSync('./folder/testing.txt', 'utf-8');

// const timecheck = `This is the file I asked to be read ${readCheck}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./folder/timecheck.txt', timecheck);

// fs.readFile('./folder/checking2.txt', 'utf-8', (err, data1) => {
//     // console.log(data)
//     if (err) return console.log('ERRORR!');
//     fs.readFile('./folder/timecheck.txt', 'utf-8', (err, data2) => {
//         console.log(data2)
//         fs.readFile('./folder/testing.txt', 'utf-8', (err, data3) => {
//             console.log(data3);
       
//             fs.writeFile('./folder/newwrites.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('file written successfully!')
//             })
//         })
//     });
// });
// console.log('File written!')

///////////////////////////////////////
// SERVER
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataobj = JSON.parse(data);
const newServer = http.createServer((req, res) => {
    const path = req.url; 
        // OVERVIEW PAGE
    if (path === '/'  || path === '/overview'){
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(tempOverview);
        // res.end('This is the HOME!');

        // PRODUCT PAGE
    } else if (path === '/product'){
       res.end('This is the product!');
       
        // res.writeHead (200, {
        //     'Content-type': 'text/html',
        //     'X-Api-Key': '123438'
        // })
        // res.end('<h1>This is an OVERVIEW page!</h1>');
        //API
    } else if (path === '/api'){
        res.writeHead(200, {'Content-type': 'application/json'});
            // console.log(data);
        res.end(data);
        //404
    }
    else {
        res.writeHead (404, {
            'Content-type': 'text/html'
        })
        res.end('<h2>Page Not Found!</h2>')
    }

    // res.end('Hello this is the server. Any changes?') //send response to the client
});

newServer.listen(3000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
})