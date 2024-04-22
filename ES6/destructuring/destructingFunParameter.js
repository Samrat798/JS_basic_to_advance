// Destructuring
// faster/easier way to access/unpack values form arrays
// objects into variables
// As function arguments

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

// function printPerson(person) {
//   //   console.log(person.first);
//   const { first, last, city } = person;
//   console.log(first, last, city);
// }

// or

function printPerson({ first, last, city }) {
  console.log(first, last, city);
}

printPerson(bob);
