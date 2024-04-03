// Objects basics

/*
Objects are collections of key (property) value pairs

Property values can be strings, numbers, booleans, arrays and 
functions however if the property value is a function it's called a method
*/

// object literal syntex,{}
// dot notation

const person = {
  name: 'samrat',
  age: 28,
  married: false,
  siblings: ['subho', 'sam'],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
};

console.log(person.name);
// add property
person.city = 'kolkata';
// delete property
delete person.siblings;

console.log(person);
