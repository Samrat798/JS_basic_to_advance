// IIFE Immediately - Invoked Function Expression
// older approach - new Modules
// simple approach to avoid global scope pollution
// good way at protecting the scope of your function and the variables within it.
// global namespace, extra steps

const num1 = 30;
const num2 = 50;

function add() {
  console.log(`The result is: ${num1 + num2}`);
}
add();

(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`The result is: ${num3 + num4}`);
})();

// pass arguments
(function (num3, num4) {
  console.log(`The result is: ${num3 + num4}`);
})(110, 489);

const result = (function (num3, num4) {
  console.log(`The result is: ${num3 + num4}`);
  return num3 + num4;
})(110, 489);

console.log(result);
