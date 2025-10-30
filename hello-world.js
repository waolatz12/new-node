// console.log(arguments);
// console.log(require('module').wrapper);
//module.exports
const Calc = require('./calculator');

const  calculations = new Calc();
console.log(calculations.add(2, 3));

//exports
// const Calc2 = require('./calculator2');
const {add, multiply} = require('./calculator2'); //another way for writing the code above

// console.log(Calc2.multiply(4,5));
console.log(add(4,5));

