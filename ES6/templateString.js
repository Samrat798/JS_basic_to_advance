// Template Strings/Literals

const name = 'John';
const lastName = 'sanders';
const age = 25;

const parse =
  'My full name is ' +
  name +
  ' ' +
  lastName +
  " and I'm " +
  age +
  ' Years old.';

console.log(parse);

const parse2 = `My full name is ${name} ${lastName} and I'm ${age} years old.`;
console.log(parse2);
