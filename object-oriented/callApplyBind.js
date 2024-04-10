//  call -runs instantly, arguments - list of items
// The below code for call

/*
const john = {
  name: 'John',
  age: 24,
  greet: function () {
    console.log(this);
    console.log(`Hello I'm ${this.name} and I'm ${this.age} years old`);
  },
};

const sam = {
  name: 'Samrat',
  age: 27,
};

// john.greet();

function greet() {
  console.log(this);
  console.log(`Hello I'm ${this.name} and I'm ${this.age} years old`);
}

// this will fail
// sam.greet();
greet.call(sam);
greet.call(john);
greet.call({ name: 'Peter', age: 30 });

// another way to call another objects methods
john.greet.call(sam);
*/

// apply - runs instantly, arguments - array of items
//  the below code for apply

/*
const john = {
  name: 'john',
  age: 24,
};

const susan = {
  name: 'susan',
  age: 27,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello, I'm ${this.name} and I'm ${this.age} years old and i live in ${city}, ${country}`
  );
}

// greet.call(john, 'san diego', 'us');
// greet.call(susan, 'san diego', 'us');
// greet.call({ name: 'peter', age: 30 }, 'san diego', 'us');

greet.apply(john, ['san diego', 'us']);
greet.apply(susan, ['san diego', 'us']);
greet.apply({ name: 'peter', age: 30 }, ['san diego', 'us']);
*/

// Bind - assign, use later, arguments - list of items
//  Check below code for bind

const john = {
  name: 'john',
  age: 24,
};

const susan = {
  name: 'susan',
  age: 27,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello, I'm ${this.name} and I'm ${this.age} years old and i live in ${city}, ${country}`
  );
}

// assign, call it later
const susanGreet = greet.bind(susan, 'toronto', 'canada');
susanGreet();
