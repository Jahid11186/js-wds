/// rest operator
function sum(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(sum(2, 4, 6, 8));

function multiply(multiplier, ...numbers) {
  console.log("multiplier: ", multiplier);
  console.log("numbers: ", numbers);
  const sum =
    multiplier * numbers.reduce((multiply, number) => multiply + number, 0);
  return sum;
}

console.log(multiply(...numberArray));
