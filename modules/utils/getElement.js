function getElement(slection) {
  const element = document.querySelector(slection);
  if (element) {
    return element;
  } else {
    throw Error(`You did not selectt element`);
  }
}
export default getElement;
