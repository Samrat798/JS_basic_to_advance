// Hoisting
// function and var declarations are hosted
// safar to access only after initialized
display();
// moreComplex();

const firstName = 'Samrat';
let lastName = 'Majumder';
var random = 'random';

function display() {
  console.log(`Hello world`);
}

function moreComplex() {
  console.log(`${firstName}, ${lastName}, ${random}`);
}
