// Destructuring
// faster / easier way to access/unpack values from objects
// objects into variable
// Objects

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);

const {
  first: firstName,
  last,
  city,
  zip,
  siblings: { sister },
} = bob;

console.log(firstName, last, city, zip, sister);
