const { add, subtract, multiply, divide, sumArray, maxNumber, minNumber, reverseString, stringLength, capitalizeArray } = require('./jb-tdd')


test('addition', () => {
    expect(add(1, 2)).toBe(3);
});


test('subtraction', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('multiplication', () => {
    expect(multiply(3, 4)).toBe(12);
});


test('division', () => {
    expect(divide(10, 2)).toBe(5);
});


test('sum of array', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
});


test('maximum number', () => {
    expect(maxNumber([1, 5, 3])).toBe(5);
});

test('minimum number', () => {
    expect(minNumber([1, 5, 3])).toBe(1);
});

test('reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('length of string', () => {
    expect(stringLength('hello')).toBe(5);
});

test('capitalize array', () => {
    expect(capitalizeArray(['apple', 'banana', 'orange'])).toEqual(['APPLE', 'BANANA', 'ORANGE']);
});


