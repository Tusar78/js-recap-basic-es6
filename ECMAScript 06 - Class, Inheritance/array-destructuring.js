// const {x, y, z} = {
//     a: 10,
//     b: 20,
//     c: 30,
//     x: 40,
//     y: 50,
//     z: 60
// }

// console.log(x, y, z);

// const p = 200;
// const q = 100;

// const [p, q] = [p, q];
// console.log(p, q);



const person = {
    name: "Tusar",
    age: 22,
    eyeColor: "black",
    car: {
        model: 'BMW',
        color: 'red',
        price: '8m'
    }
};

console.log(person?.car?.model);
console.log(person?.bike?.model);


let a, b, rest;

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a, b);
console.log(rest);

let x = 10;
let y = 20;
[y, x] = [x, y];
console.log(x, y);

const [name1, name2, ...names] = ['Rochita', 'Tusar', 'Rakib', 'Sharif', 'Arisha', 'Yasin']
for (const name of names) {
    console.log(name);
}