/*
setTimeOut - runs function once after specific time

- pass function reference
- duration in ms ( 1000ms = 1 second)
- default 0,
- return unique identifire
- clearTimeout to cancel
- on window object

*/
function sayHello() {
  console.log('Hello Sam');
}

// setTimeout(sayHello, 1000);

// setTimeout(function () {
//   console.log('Hello World');
// }, 2000);

function showScore(name, score) {
  console.log(`Hello ${name}, your score is ${score}.`);
}

// setTimeout(showScore, 3000, 'Sam', 25);

const firstID = setTimeout(showScore, 3000, 'Sam', 25);
const secondID = setTimeout(showScore, 3000, 'Sam2', 26);

console.log(secondID);
console.log(firstID);

// need to fire that when we need to stop running the program
// clearTimeout(firstID);
clearTimeout(secondID);
