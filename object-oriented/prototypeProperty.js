/*
Prototypal Inheritence Model
Javascript uses prototypal inheritance model. that means that
every constructor function/class has a prototype property that 
is shared by every instance of the constructor/class. so any 
properties and methods or prototype can be accessed by every instance.
prototype property returns a object
*/

/*
Property lookup 
If child dose not have ask parent
Everything in JS is an object
*/
function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

const john = new Account('John', 200);
const bob = new Account('Bob', 300);
Account.prototype.bank = 'CHASE';
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

// console.log(john);
console.log(bob);
console.log({});
console.log([]);

// john.deposit(300);
// bob.deposit(600);
