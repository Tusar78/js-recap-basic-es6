// const pers = {
//     numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     result: function(){
//         this.numbers.find((val) => {
//             return val > 4;
//         }, this)
//     }
// }

// console.log(pers.result());

class Student {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    test() {
        console.log('Hello');
    }

    exampleFunction() {
        let array = [1, 2, 3];
        array.find(() => {
            this.test();
        })
    }
}

const tusar = new Student('Tusar', 22);
tusar.exampleFunction();