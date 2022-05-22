const divs = [...document.querySelectorAll("div")];

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

divs.map((div) => {
  console.log(div);
});

const [first, second, ...rest] = array;

console.log(first, second);
console.log(rest);
