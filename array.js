const marval = ["ironman","spiderman","antman"];
console.log(marval);

const dc = ["superman","batman"];
console.log(dc);
//  push dc into marval array

marval.push(dc);
// console.log(marval)

// We use concat to adding two array data
const newHero = marval.concat(dc);
// console.log(newHero);

// here ve can use
const new_hero = [...marval,...dc];
console.log(new_hero);
