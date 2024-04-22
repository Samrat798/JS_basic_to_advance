// New string methods
// startWith(), endWith(), includes(), repeat()

const person = 'Peter Smith';
const employee = '24356-EMP-PETER-SMITH';
const manager = '23456-MAN-JOHN-DOE';

// StertsWith case sensitive
// console.log(person.startsWith('Pet'));
// console.log(employee.startsWith('EMP', 6));

// endWith
// console.log(manager.endsWith('DOE'));
// console.log(manager.endsWith('MAN', 9));

// includes
// console.log(employee.includes('PETER'));

// Repeat
const multiplyPeople = (person, amount = 5) => person.repeat(amount);
const people = multiplyPeople(person, 10);
console.log(people);
