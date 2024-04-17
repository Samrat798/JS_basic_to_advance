// deafault parameters, arrow function gotchas

const john = 'John';
const peter = 'Peter';

function sayHi(person) {
  console.log(`Hi ${person}`);
}

const sayHello = (person) => console.log(`Hello ${person}`);

sayHi();
sayHello(peter);
