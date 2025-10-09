// function functionModule (){
//     console.log('Hello, this is function one');
// }

// function functionModule2 (){
//     console.log('Hello, this is function two');
// }

// const list = ['ordered', 'unordered', 'orgamized', 'divided'];

// module.exports = {
//     foo: 'bar',
//     list:list,
//     functionModule: functionModule,
//     functionModule2: functionModule2,
// }
const fs = require('fs');
// const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataobj = JSON.parse(data);
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(dataobj);