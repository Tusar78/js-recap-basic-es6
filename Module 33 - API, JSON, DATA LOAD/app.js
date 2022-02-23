const user = {
    id: 326478,
    name: 'Tusar',
    job: 'Computer Operator!'
}
const {id, name, job} = user;

console.log(user);
const stringified = JSON.stringify(user);
console.log(stringified);
const stringifyToObject = JSON.parse(stringified);
console.log(stringifyToObject);