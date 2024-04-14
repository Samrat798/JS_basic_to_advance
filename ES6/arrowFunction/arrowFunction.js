// arrow functions or Fat Arrow FUnctions
// no name, always expression, assign to variable
// no function keyword
// 'this'
/*
function sayHi() {
  console.log('Hello');
}

sayHi();

const hello = function (name) {
  console.log(`Hello ${name}`);
};
hello('Samrat');

function triple(value1, value2) {
  return value1 * value2 * 3;
}
console.log(triple(29, 89));
*/
const sayHi = () => console.log('Hello');
sayHi();

const double = (value) => value * 2;
const num = double(4);
console.log(num);

// two parameters and more then one line
const multiply = (num1, num2) => {
  const result = num1 * num2;
  return result;
};

console.log(multiply(45, 45));

// return object

const object = () => ({ name: 'Samrat', age: 27 });
const person = object();
console.log(person);

// arrow functions as callback functions
const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter((number, index) => {
  console.log(index);
  return number > 2;
});
console.log(big);

//
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => console.log('clicked'));
