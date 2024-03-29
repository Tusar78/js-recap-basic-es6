// function declaration
function add1(num1, num2) {
    return num1 + num2
}

// Function expression 
const add2 = function add2(num1, num2) {
    return num1 + num2;
}

// Function expression (anonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}

// Array function
const add4 = (num1, num2) =>  num1 + num2;





const sum1 = add1(10, 20);
const sum2= add2(10, 20);
const sum3 = add3(10, 20);
const sum4 = add4(10, 20);
console.log(sum1, sum2, sum3, sum4); 
