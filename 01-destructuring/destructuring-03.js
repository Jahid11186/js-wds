// OBJECT method
function nameToFirstLast(fullName) {
  const [firstName, lastName] = fullName.split(" ");
  return {
    f: firstName,
    l: lastName,
  };
}

const { f, l } = nameToFirstLast("Joe Biden");

console.log(f);
console.log(l);

// Array method
function nameDivided(fullName) {
  return fullName.split(" ");
}

const [firstName, lastName] = nameDivided("Jahid Hassan");

console.log(firstName);
console.log(lastName);
