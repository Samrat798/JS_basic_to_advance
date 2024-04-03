// this
// points to the left of the dot

const john = {
  firstName: 'John',
  lastName: 'anderson',
  fullname: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

const bob = {
  firstName: 'Bob',
  lastName: 'Sanders',
  fullname: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

john.fullname();
bob.fullname();
