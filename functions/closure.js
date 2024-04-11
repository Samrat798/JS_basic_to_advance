// Closure
// closure gives you an access to an outer function's scope from an inner function
// make private variables with closure

/*
function outer() {
  let privateVar = 'secret';
  function inner() {
    console.log(`Hello there secret is: ${privateVar}`);
  }
  return inner;

  inner();
}

outer()();

const value = outer();
console.log(value);
value();
*/

// Closure Basic Examples
/*
function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hay ${name} your balance is ${balance}`);
  }
  return showBalance;
}

newAccount('sam', 5000)();

const john = newAccount('john', 300);
john();
*/

// Closure complete example
function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hay ${name} your balance is ${balance}`);
  }
  return showBalance;
}

newAccount('sam', 5000)();

const john = newAccount('john', 300);
const bob = newAccount('Bob', 1000);
john();
bob();
