const fish = {
  id: 778,
  name: "hilsha elish",
  age: "3 month",
  color: "silver",
  isWelly: true,
};

const { id, name, age, color, isWelly } = fish;

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

const {model, price} = person.car;

console.log(model, price);