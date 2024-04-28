// Array.from and Array.of - NOT OM THE PROTOTYPE
// Array.from
// Array.of
// of cheates a new array instance from a variable number of arguments

const example = ['one', 'two', 'three'];
// console.log(example);
// console.log(example.map);
// console.log(example.from);
// console.log(example.of);

const friends = Array.of('john', 3, true);
// console.log(friends);

//------------------------------------------------//
// Array.from and Array.of - NOT ON THE PROTOTYPE
// from - returns Array Object from any object with a length property
// or an iterable object
// form turns array-like/ish into array - string,nodeList,set

const udemy = 'udemy';
console.log(Array.from(udemy));

function countTotal() {
  //   console.log(arguments);
  let total = Array.from(arguments).reduce((total, curr) => (total += curr), 0);
  console.log(total);
}

countTotal(89, 90, 76, 59, 1000);
