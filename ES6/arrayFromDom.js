// Array.from and Array.of - NOT ON THE PROTOTYPE
// from - returns Array Object from any object with a length property
// or an iterable object
// form turns array-like/ish into array - string,nodeList,set

const p = document.querySelectorAll('p');
const result = document.getElementById('result');
const second = document.getElementById('second');

console.log(p);

let newText = Array.from(p);
newText = newText.map((item) => `<span>${item.textContent}</span>`).join(' ');

result.innerHTML = newText;

const text = Array.from(document.querySelectorAll('p'), (item) => {
  return `<span>${item.textContent}</span>`;
}).join(' ');

second.innerHTML = text;
