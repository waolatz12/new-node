function functionModule (){
    console.log('Hello, this is function one');
}

function functionModule2 (){
    console.log('Hello, this is function two');
}

const list = ['ordered', 'unordered', 'orgamized', 'divided'];

module.exports = {
    foo: 'bar',
    list:list,
    functionModule: functionModule,
    functionModule2: functionModule2,
}