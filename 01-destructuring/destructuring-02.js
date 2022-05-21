const array = ["A", "B", "C", "D"];
const person = {
  name: "Jahid",
  age: 25,
  address: {
    street: "Housing limited 08",
    city: "Dhaka",
  },
  favouriteFood: "Sweet",
};

// const name = person.name;
// const age = person.age;

const { name: firstName, age, favouriteFood } = person;
const { address } = person;
const { street, city } = address;
// const { street, city } = person.address;

console.log(firstName);
console.log(age);
console.log(favouriteFood);
console.log(city);
console.log(street);
