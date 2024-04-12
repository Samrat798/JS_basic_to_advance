// var, let, const
// define, update, redefine
// const cannot mutate primitive type

// with const we can change the object value
const person = { name: 'Bob' };
person.name = 'John';
// console.log(person.name);

/* ----------------------------------- */

// function scope and block scope
// var, let, const
// let, const - blocked scoped{} - anything within {}
// var - function scoped

// Global scope

var amount = 100;
function greet() {
  // local scope
  var random = 'some random value';
  console.log(`Hello there ${amount} ${random}`);
}

// greet();

let total = 1000;
var test = true;

if (test) {
  // local scope
  let total = 3000;
  console.log('Hello there');
}
console.log(total);
