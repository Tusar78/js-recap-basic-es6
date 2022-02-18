// Variable
var deposit = 400;
const pi = 3.14159;
let name = 'Tusar';

// Condition
const age = 22;
if (age >= 18) {
    console.log('You are adult!');
} else {
    console.log('You are not adult!');
}

// Array 
const friends = ['Tusar', 'Rakib', 'Rochita', 'Sharif', 'Shuvo'];
friends.pop();
friends.push('Sabina');
friends.shift;
friends.unshift('Rubi');
if (friends.indexOf('Rubi') == -1) {
    console.log('Rubi nai');
} else {
    console.log('Rubi ache');
}
console.log(friends.includes('Rakib'));

// Looping - for, while, for of
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    console.log(element);
}

let i = 0;
while (i < friends.length) {
    console.log(friends[i]);
    i++;
}

for (const friend of friends) {
    console.log(friend);
}

// function
function sum(a, b) {
    return a + b;
}

const twoNumberSum = sum(10, 20);

// Object 
const person = {
    name : 'Rochita',
    age: 26,
    eyeColor: 'Black'
}
console.log(person);