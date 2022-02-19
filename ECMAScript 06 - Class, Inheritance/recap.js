// 1. Let and const
const pi = 3.14159; // that is not change able
let age = 22; // That is change able

// 2. Default parameter
// 3. Arrow function
const myFunc = (num1, num2 = 20) => {
  num1 = num1 || 10;
  return num1 + num2;
};
const sum = myFunc();
// console.log(sum);

// 4. spread operator
// const names = ['Rochita', 'Tusar', 'Rakib', 'Sharif'];
const numbers = [24, 54, 74, 85, 95, 67, 85, 88, 12, 45, 75];
const getMaxNum = array => {
  const max = Math.max(...array);
  return max;
};
const biggest = getMaxNum(numbers);
// console.log(biggest);
