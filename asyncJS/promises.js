// callbacks, promises, async/await
// PROMISES - pending, resolve, rejected
// then catch - pass another callback

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

const promise = new Promise((resove, reject) => {
  let value = false;
  if (value) {
    resove('Hay, value is true');
  } else {
    reject('There was a error, value is false');
  }
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
