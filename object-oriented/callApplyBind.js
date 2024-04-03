//  call -runs instantly, arguments - list of items

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
