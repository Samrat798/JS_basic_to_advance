// Get element by ID
/*
const h1 = document.getElementById('title');
h1.style.color = 'blue';
*/

const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'green';

const items = document.getElementsByTagName('li');

const betterItems = [...items]; // Turns HTML elements in an array.

betterItems.forEach(function (item) {
  console.log(item);
});
