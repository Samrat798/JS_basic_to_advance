// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(e) {
  console.log('current target ', e.currentTarget);
  // console.log('Target ', e.target);
  // if (e.target.classList.contains('link')) {
  //   console.log('You clicked on the link');
  // }
}

//below fucntion stop bubbling nature
function stopPropagation(e) {
  console.log('You clicked on the link');
  e.stopPropagation();
}

list.addEventListener('click', stopPropagation, { capture: true });
container.addEventListener('click', showBubbling, { capture: true });
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling, { capture: true });
