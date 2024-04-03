// nested objects
// set variable as peoperty value
//  dot notation vs bracket notation

const age = 27;
let random = 'random-value';
random = 'age';

const person = {
  name: 'Samrat',
  age: age,
  married: false,
  siblings: ['Subha', 'Sam'],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
  job: {
    title: 'developer',
    company: {
      name: 'NA',
      address: 'barasat',
    },
  },
  'random-value': 'random',
};

console.log(person.job.title);
console.log(person);
console.log(person['name']);
console.log(person['random-value']);

console.log(person[random]);
