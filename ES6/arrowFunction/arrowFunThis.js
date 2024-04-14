// Arrow function or Fat arrow functions
// reg function : 'this' refers parent, left of the dot
// arrow function : refers to it's current surrounding scope

const bob = {
  firstName: 'Bob',
  lastName: 'Smith',
  sayName: function () {
    console.log(this);
    // const self = this;
    setTimeout(() => {
      console.log(this);
      //   console.log(self);
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }, 2000);
  },
};

const anna = {
  firstName: 'Anna',
  lastName: 'Sanders',
  sayName: () => {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};

bob.sayName();
// anna.sayName();
