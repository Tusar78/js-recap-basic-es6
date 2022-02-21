// // 1. Declared by let and const
// const electricity = "PDB";
// let jar = "Honey";

// // Template string
// const materials = `We have taken power connection for ${electricity}. I have a ${jar} jar`;

// // Arrow function
// const divideByFive = (num) => num / 5;
// // console.log(divideByFive(10));

// // const multipleTwoParameters = (num1, num2) => {
// //   const addTwoNum1 = num1 + 2;
// //   const addTwoNum2 = num2 + 2;
// //   return addTwoNum1 * addTwoNum2;
// // };
// // const result = multipleTwoParameters(5, 3);
// // console.log(result);

// const multiplyByThreeParameter = (x, y, z) => x * y * z;
// // const result = multiplyByThreeParameter(5, 3, 5);
// // console.log(result);

// const multipleTwoParameters = (num1, num2) => (num1 + 2) * (num2 + 2);
// const result = multipleTwoParameters(5, 3);
// // console.log(result);

// // Arrow Function

// // - no parameters
// const noParametersOne = _ => 40;
// const noParametersTwo = () => 40;
// console.log(noParametersTwo());

// // - Single parameter
// const singleParameter = x => 42;
// const singleParameter = (x) => 42;

// // - Multiple parameter
// const multipleParameter = (x, y) => 42;

// // - curly braces and return
// const feedTheCat = cat => {
//     if (cat === 'hungry') {
//         return 'Feed the cat'
//     } else {
//         return 'Do not feed the cat!'
//     }
// }

// - look at the set time out function [arrow function]
// const obj = {
//     id: 326478,
//     func: function func() {
//         setTimeout(() => {
//             console.log(this.id);
//         }, 1000);
//     }
// }
// obj.func();
// var cat = {
//     lives: 9,
//     jumps: () => {
//       return Object.prototype.bild(this).lives;
//     }
// }
// console.log(cat.jumps());

// Arrow Function Deep
// const tryArrow = _ => return 10; // Get error

// This is normal function
/*
const javaScript = {
  name: "JavaScript",
  libraries: ["React", "Angular", "vue"],
  printLibraries: function () {
      let self = this;
      this.libraries.forEach(function (val) {
          console.log(`${self.name} loves ${val}`);
      })
  },
};

javaScript.printLibraries();
*/

// For arrow function
// const javascript = {
//     name : 'JavaScript',
//     libraries: ['Angular', 'React', 'Vue', 'Svelte'],
//     iterate: () => {
//         javascript.libraries.forEach(elem => {
//             console.log(`${this.name} loves ${elem}`);
//         })
//     }
// }
// javascript.iterate();

const numbers = [4, 21, 45, 57, 65, 74, 23];
const timeFive = numbers.map((val) => val * 5);
// console.log(timeFive);
const getOddNumber = numbers.filter((val) => val % 2);
// console.log(getOddNumber);

const foods = [
  { name: "Apple", need: "10kg", price: "2000" },
  { name: "Carrots", need: "5kg", price: "150" },
  { name: "Orange", need: "9kg", price: "950" },
  { name: "Gram", need: "5kg", price: "400" },
  { name: "Wood nuts", need: "3kg", price: "2400" },
];

const priceTwoThousand = foods.find((val) => val.price == 2000);
// console.log(priceTwoThousand);

const { name, age } = {
  name: "Tusar",
  age: 22,
  myFunc: function () {
    return this.name;
  },
};
console.log(name, age);

const accessories = ["pot", "jar", "cup", "penholder"];
const [, , three] = accessories;
// console.log(three);

const myFunc = (num1, num2, num3 = 7) => {
  const summation = num1 + num2 + num3;
  return summation;
};
// console.log(myFunc(3, 5));

const person = {
  name: "Tusar",
  roll: 326478,
  friend: {
    name: "Shovon",
    roll: 326425,
    friend: [{ name: "Selim", roll: 326480}, "Julfiqur", "Taher"],
  },
};

console.log(person.friend3?.friend[0]);