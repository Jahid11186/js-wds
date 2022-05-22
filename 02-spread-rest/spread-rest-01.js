numberArray = [10, 2, 4, 6];

numberArray.push(0);
const newArray = [...numberArray];
numberArray.push(100);

console.log("newArray: ", newArray);
console.log("numberArray: ", numberArray);
