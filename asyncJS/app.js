// Javascript is single threaded, synchronous language.

console.log(`I'm first`);
console.log(`I'm second`);
console.log(`I'm thored`);

console.log(`I'm first`);
boilingWater();
console.log(`I'm thored`);
function boilingWater() {
  console.log('boiling.....');
  for (let i = 0; i < 1000; i++) {
    console.log('Still not done...');
  }
  console.log('Done..');
}
