// Spread Operator
// Allows an iterable to apread/expand individually inside reciever
// Split into single items and copy them
// ES2018 - ES8 with object

const person = {
  name: 'Sam',
  job: 'Developer',
};

const newPerson = { ...person, city: 'kolkata', name: 'Peter' };

console.log(newPerson);
