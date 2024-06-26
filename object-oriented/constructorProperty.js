// All Objects in Javascript have access to constructor property that returns a constructor function that create it.
// built in constructor functions
// arrays and functions are objects in javascript

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love Javscript`
    );
  };
}

const john = new Person('Samrat', 'Majumder');
// console.log(john.constructor);

const bob = {};
console.log(bob.constructor);

const list = [];
console.log(list.constructor);

const sayHi = function () {};
console.log(sayHi.constructor);

const susy = new john.constructor('susy', 'carpenter');
susy.fullName();
