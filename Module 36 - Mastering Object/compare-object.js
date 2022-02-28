// Modality one [not workable]
// const first = { a: 5, b: 2 };
// const second = { a: 5, b: 2 };
// const third = first;
// if (first == third) {
//     console.log('Yes, Its true');
// } else {
//     console.log('No, Its false');
// }

// Modality two using JSON.stringify() method
const first = { a: 5, b: 2 };
const second = { b: 2, a: 5 };
if (JSON.stringify(first) == JSON.stringify(second)) {
    console.log('Yes, Its true');
} else {
    console.log('No, Its false');
}