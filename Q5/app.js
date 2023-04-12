
let map = new Map();

map.set("name", "John");

// -- error --
// let keys = map.keys();
// Error: keys.push is not a function

// -- solution --
let keys = Array.from(map.keys());

keys.push("more");

console.log(...keys);