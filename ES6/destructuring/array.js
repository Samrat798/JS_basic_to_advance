// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Arrays

const fruits = ['Orange', 'banana', 'lemon'];
const friends = ['John', 'peter', 'bob', 'anna', 'kelly'];

const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];
console.log(orange, banana, lemon);

// the last item will be undefine
// const [john, peter, bob, anna, kelly, susan] = friends;
// console.log(john, peter, bob, anna, kelly, susan);

const [john, , bob, , kelly] = friends;
console.log(john, bob, kelly);
