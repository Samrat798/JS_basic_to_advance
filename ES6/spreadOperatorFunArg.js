const number = [23, 54, 66, 68, 2345];
console.log(Math.max(...number));

const john = ['john', 'sanders'];

const sayHello = (name, lastName) => {
  console.log(`Hello ${name} ${lastName}`);
};
sayHello(...john);
