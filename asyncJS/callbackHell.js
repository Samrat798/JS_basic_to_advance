// Make soup
// boil water 10 min
// chop onion
// add carrots boil for 5 min
// chop carrots
// add onion for 5 min
// BROWSER!!!!!Fetch data, Get Geolocation, setTimeOut, SetTimer etc.
// callBacks, promises, async/await

boilWater();
console.log('chop carrot');

function boilWater() {
  console.log('boiling....');
  setTimeout(() => {
    console.log('Done...');
    console.log('add carrots');
    setTimeout(() => {
      console.log('carrots done');
      console.log('add onions');
      setTimeout(() => {
        console.log('onion done');
      }, 500);
    }, 500);
    console.log('chop onion');
  }, 1000);
}
