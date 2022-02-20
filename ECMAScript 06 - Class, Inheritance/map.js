const numbers = [1, 4, 7, 8];
// const output = [];

// const doubleIt = num => num * 2;

// for (const number of numbers) {
//     const result = doubleIt(number);
//     output.push(result)
// }
// console.log(output);


const num2 = numbers.map(val => {
    return val * 1;
})

// console.log(num2);

const num3 = numbers.map(val => val * val);
console.log(num3);