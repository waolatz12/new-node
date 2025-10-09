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
const replaceTemplate = require('./storage/replaceTemplate')


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
// const replaceTemplate = (temp, product) => {
//     let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName); //we added the g flag so this affect all places where the variable is being specified not just specific ones in the card
//     output = output.replace(/{%IMAGE%}/g, product.image);
//     output = output.replace(/{%PRICE%}/g, product.price);
//     output = output.replace(/{%FROM%}/g, product.from);
//     output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
//     output = output.replace(/{%QUANTITY%}/g, product.quantity);
//     output = output.replace(/{%DESCRIPTION%}/g, product.description);
//     output = output.replace(/{%ID%}/g, product.id);

//     if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic'); //not-organic is a class specified in the file's CSS properties
//     return output;
// }
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);
const newServer = http.createServer((req, res) => {
    const path = req.url; 
    // console.log(path);
    // console.log(url.parse(path, true));
    const {query , pathname} = url.parse(req.url, true); //query and pathname are the specific column of the response in the console for the page objects
        // OVERVIEW PAGE
    if (pathname === '/'  || pathname === '/overview'){
        res.writeHead(200, {'Content-type': 'text/html'});
        const cardsHtml = dataObj.map(element => replaceTemplate(tempCard, element)).join(''); //this replace each element with the tempCard and save it in the element .join('') joins all the array elements into one string without commas:
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        // console.log(cardsHtml);
        res.end(output);
        // res.end('This is the HOME!');

        // PRODUCT PAGE
    } else if (pathname === '/product'){
        res.writeHead(200, {'Content-type': 'text/html'});
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct,product);

        // console.log(query);
       res.end(output);
       
        // res.writeHead (200, {
        //     'Content-type': 'text/html',
        //     'X-Api-Key': '123438'
        // })
        // res.end('<h1>This is an OVERVIEW page!</h1>');
        //API
    } else if (pathname === '/api'){
        res.writeHead(200, {'Content-type': 'application/json'});
            console.log(data);
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