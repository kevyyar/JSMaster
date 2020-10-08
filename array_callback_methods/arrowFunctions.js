const squareNum = (x) => {
  return x * x;
};

const isEven = (num) => {
  return num % 2 === 0;
};

const multiply = (x, y) => {
  return x * y;
};

const greet = () => {
  console.log("Hello there!");
};
/////// Implicit Returns in Arrow Functions
const square = (num) => num * num;

const nums = [1, 34, 23, 45, 65];

// const doubles = nums.map((num) => {
//   return num * 2;
// });

const doubles = nums.map((num) => num * 2);
