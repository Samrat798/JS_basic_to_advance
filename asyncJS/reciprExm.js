// Make soup
// boil water 10 min
// chop onion
// add carrots boil for 5 min
// chop carrots
// add onion for 5 min
// BROWSER!!!!!Fetch data, Get Geolocation, setTimeOut, SetTimer etc.

// boilWater(10000);
// console.log(`chop onion`);
// boilWater(5000);
// console.log(`chop carrot`);
// boilWater(5000);

boilWater(100);
console.log(`Chop carrots`);
for (let i = 0; i < 10000; i++) {
  console.log(`Still busy.`);
}

function boilWater(time) {
  console.log('boiling...');
  setTimeout(() => {
    console.log('Done.');
  }, time);
}
