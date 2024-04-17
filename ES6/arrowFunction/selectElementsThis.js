// Arrow functions or fat arraow functions
// reg function : 'this' refers parent, left of the dot
// arrow function : refers to it's current surrounding scope

const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  setTimeout(() => {
    this.style.color = '#000';
  }, 3000);
});

// btn.addEventListener('click', () => {
//   this.style.color = '#000';
// });
