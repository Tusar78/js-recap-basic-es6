const friends = ["Tusar", "Rakib", "Shuvo", "Sharif"];
const fLength = friends.map((val) => val.length);
console.log(fLength);

const products = [
  { name: "Papers", price: 25, color: "white" },
  { name: "malamine", price: 175, color: "ofwhite" },
  { name: "Honey", price: 240, color: "deepyellow" },
  { name: "Oppo a3s", price: 13500, color: "blue" },
  { name: "Pen", price: 5, color: "yellow" },
];

const productName = products.map((val) => {
  return val.name;
});

console.log(productName);

products.map(val => console.log(val.name))

products.forEach(val => console.log(val.name))
