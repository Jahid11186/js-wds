const person = {
  name: "Jahid",
  age: 25,
  address: {
    street: "08, limited",
    city: "Dhaka",
  },
  favouriteFood: "Sweet",
};
const details = {
  edu: {
    school: "TGBS",
    college: "MPC",
    university: "DIU",
  },
  result: {
    ssc: 5.0,
    hsc: 1.0,
    bsc: 0.0,
  },
};

const others = {
  name: "person2",
};
const { name, age, ...rest } = person;
console.log(name, age, rest);

const person2 = {
  ...person,
  ...details,
  ...others,
  occupation: "Software developer",
};

const person3 = {
  ...others,
  ...person,
  ...details,
  occupation: "Software developer",
};

console.log(person2);
console.log(person3);
