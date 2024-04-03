// Blue print
// Factory Functions and Constructor Functions
// Constructor functions
// new - creates new object, points to it, omit return

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
  };
  console.log(this);
}
const john = new Person('John', 'anderson');
john.fullName();
const bob = new Person('Bob', 'Anderson');
bob.fullName();
const susy = new Person('Susy', 'Anderson');
susy.fullName();

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
