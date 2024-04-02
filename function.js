const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

const squareArray = arr => arr.map(num => num * num);

const stringLength = str => str.length;

console.log("add function", add(3,4));
console.log("multiply function", multiply(3,4));
console.log("squareArray function", squareArray([3,4,5,6]));
console.log("stringLength function", stringLength("hello world"));