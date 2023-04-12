
let map = new Map();

map.set("name", "John");

// -- error --
// let keys = map.keys();
// Error: keys.push is not a function

// -- solution --
let keys = Array.from(map.keys());

keys.push("more");

console.log(...keys);

// -- answer -- :
// That’s because map.keys() returns an iterable, but not an array.
// We can convert it into an array using Array.from:

// -- answer in web : --
// https://javascript.info/map-set