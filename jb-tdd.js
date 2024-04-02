//JavaScript Basics and TDD:
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
}

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function maxNumber(arr) {
    return Math.max(...arr);
}

function minNumber(arr) {
    return Math.min(...arr);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function stringLength(str) {
    return str.length;
}

function capitalizeArray(arr) {
    return arr.map(word => word.toUpperCase());
}



module.exports = {
    add, subtract, multiply, divide, sumArray, maxNumber, minNumber, reverseString, stringLength, capitalizeArray
};