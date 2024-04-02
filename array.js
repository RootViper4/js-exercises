const person = {
    name: 'John',
    age: 30,
    gender: 'male'
};

console.log(person)


const persons = [
    { name: 'John', age: 30, gender: 'male' },
    { name: 'Jane', age: 25, gender: 'female' },
    { name: 'Doe', age: 35, gender: 'male' }
];

console.log(persons)

function totalAge(persons) {
    return persons.reduce((acc, person) => acc + person.age, 0);
}
console.log("total age", totalAge(persons))


function getNames(persons) {
    return persons.map(person => person.name);
}

console.log("Get Name", getNames(persons))