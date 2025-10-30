const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
// const myEmitter = new EventEmitter(); //calling the module directly
const myEmitter = new Sales(); //using class inheritance

myEmitter.on('newSale', () => {
  console.log('There was a new sale!');
});
myEmitter.on('newSale', () => {
  console.log('There was a special sale!');
});

myEmitter.on('newSale', (stock) => {
  console.log(`There are ${stock} items in the stock`);
});
myEmitter.emit('newSale', 9);
myEmitter.emit('newSale', 10);

////////////////////////////////////
const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received!');
  res.end('Request received!');
});

server.on('request', (req, res) => {
  // console.log('Another event!');
  console.log('Another event!');
});

server.on('close', () => {
  console.log('Request closed!');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for request...');
});
