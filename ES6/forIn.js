// "for in" loop - iterate over object properties
// not adviceed to use it on array, especially if the order is importent
// on array use "for of" loop instead

const person = {
  name: 'john',
  age: 25,
  status: 'student',
};

// for (const propertyName in person) {
//   console.log(`${propertyName}: ${person[propertyName]}`);
// }

// ------------------------------------------------ //
// Three methods to convert objects into array
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Objects.entries() - converts both

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
const result = Object.entries(person);
console.log(result);

// map methods
const newResult = result.map((item) => {
  //   console.log(item);
  const [first, second] = item;
  //   console.log(first, second);
  return first;
});
// console.log(newResult);

// for of
for (const [first, second] of result) {
  //   const [first, second] = item;
  console.log(first, second);
}
