// Rest operator...
// gathers/collects the items

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...rest] = fruits;
console.log(first, second, rest);

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...restKey } = person;
console.log(job, restKey);

const textScores = [78, 90, 56, 43, 99, 65];

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name}'s average score is ${total / scores.length}`);
};

getAverage(person.name, 78, 90, 56, 43);
getAverage(person.name, ...textScores);
