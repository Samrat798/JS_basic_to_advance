// callbacks, promises, async/await
// PROMISES - pending, resolve, rejected
// then catch - pass another callback
// https://source.unsplash.com/random

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const imgContainer = document.querySelector('.img-container');
const btn = document.querySelector('.btn');
const url = 'https://source.unsplash.com/random';

btn.addEventListener('click', () => {
  loadImg(url)
    .then((data) => imgContainer.appendChild(data))
    .catch((err) => console.log(err));
});

function loadImg(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error(`failed to load image from the source : ${url}`));
    });
    img.src = url;
  });
}
