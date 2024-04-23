// Spread Operator ..
// Allow an iterable to spread/expand individually inside reciever
// split into single items and copy them

const udemy = 'udemy';

const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestfriend = 'arnold';

const friends = [...boys, ...girls, bestfriend];
// console.log(friends);

// reference
// const newFriends = friends;

// copy value
const newFriends = [...friends];
newFriends[0] = 'karina';
console.log(newFriends);
console.log(friends);
