const array = ["A", "B", "C", "D"];
const person = {
  name: "Jahid",
  age: 25,
  address: {
    street: "08, limited",
    city: "Dhaka",
  },
  favouriteFood: "Sweet",
};

// const first = array[0];
// const second = array[1];

const [first, second, , fourth] = array;

console.log(first);
console.log(second);
console.log(fourth);

function addAndMultiply(a, b) {
  return [a + b, a * b];
}

const result = addAndMultiply(4, 5);
console.log(result);

const [total, prod] = addAndMultiply(2, 2);
console.log(total);
console.log(prod);
