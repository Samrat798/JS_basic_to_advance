import { random, people } from './utils/data.js';
import showPeople from './utils/showPeople.js';
import get from './utils/getElement.js';

const container = get('.container');
const btn = get('.btn');

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
