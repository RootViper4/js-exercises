const charCount = str => {
    return str.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
};

console.log(charCount("Hello World"))

const getValuesByKey = (arr, key) => arr.map(obj => obj[key]);

const objects = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 35 }
];

console.log(getValuesByKey(objects, 'age'));



const sumNestedArray = arr => arr.map(subArr => subArr.reduce((acc, curr) => acc + curr, 0));

const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(sumNestedArray(nestedArrays));