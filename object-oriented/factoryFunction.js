// Blue print
// Factory functions & Constructor Functions
// Factory functions

// const john = {
//   firstName: 'John',
//   lastName: 'snderson',
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// const bob = {
//   firstName: 'Peter',
//   lastName: 'Sanders',
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and i love JS`
      );
    },
  };
}

const john = createPerson('John', 'anderson');
john.fullName();

const bob = createPerson('Bob', 'anderson');
bob.fullName();

const susy = createPerson('Susy', 'andreson');
susy.fullName();
