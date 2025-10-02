const http = require('http');
const fs = require('fs');
const _ = require('lodash');

//create a server
const server = http.createServer((req, res) => { //the argument passed are request and response
    // console.log('request made');
    const num = _.random(0,39); //underscore represent lodash
    console.log(num);
    // console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html'); //specify the header content type -- this is for html
    let path = './views/'
    switch (req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-uus':
            // path += 'about.html';
            res.setHeader('Location', '/about')
            res.statusCode = 301; //status code for redirects
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;

            break;
    }
    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err);
            res.end();
        } else {
            // res.write(data);// great for sending multiple data, send the data inside res.end if it is just one page or data
            res.end(data);
        }
    })
    // fs.readFile('./views/index.html', (err, data) => {
    //     if (err){
    //         console.log(err);
    //         res.end();
    //     } else {
    //         // res.write(data);// great for sending multiple data, send the data inside res.end if it is just one page or data
    //         res.end(data);
    //     }
    // })
    //send a response to the browser
    // // res.setHeader('Content-Type', 'text/plain'); //specify the header content type -- this is for text
    // res.setHeader('Content-Type', 'text/html'); //specify the header content type -- this is for html
    // res.write('<head><link rel="stylesheet" href="https://olarms-admin2.ogunstate.gov.ng/"></head>')
    // res.write('<p>This is the header</p>'); //the response message
    // res.write('<p>This is the header continuation</p>'); //the response message
    // res.end(); //end the response
});
//listen for request
server.listen(3000, 'localhost', () => { //argument passed are port number, serverIP addresss
    console.log('listening for request at localhost 3000');
});