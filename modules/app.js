import { random, people } from './utils/data.js';
import showPeople from './utils/showPeople.js';

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

// const showPeople = () => {
//   const newPeople = people
//     .map((person) => {
//       const { name, job } = person;
//       return `<p>${name} <strong>${job}</strong></p>`;
//     })
//     .join('');
//   container.innerHTML = newPeople;
// };

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people);
});
