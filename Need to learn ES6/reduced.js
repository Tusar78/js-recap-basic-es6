const numbers = [2, 4, 5, 7, 8, 9];
const newNum = numbers.reduce((val, val2) => {
    return val2 - val;
})
console.log(newNum);