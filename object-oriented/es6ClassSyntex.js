/*
ES6 classes - syntactic suger
Prototypal Inheritance
*/
// Check prototypeProperty.js for clear thoughts

class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = 'Chese';
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john = new Account('john', 0);
console.log(john);
console.log(john.bank);
john.deposit(500);

const bob = new Account('bob', 220);
console.log(bob);
console.log(bob.bank);
bob.deposit(500);
