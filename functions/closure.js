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
  function deposite(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hay,${name} sorry not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  return { showBalance: showBalance, deposite: deposite, withdraw: withdraw };
}

// newAccount('sam', 5000)();

const john = newAccount('john', 300);
const bob = newAccount('Bob', 1000);
john.showBalance();
john.deposite(600);
john.withdraw(400);
bob.showBalance();
