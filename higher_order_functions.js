function add(x, y) {
  return x + y;
}

function helloThere(name) {
  console.log(`hello there ${name}`);
}

const subtract = function (x, y) {
  return x - y;
};

function multiply(x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
};

const operations = [add, subtract, multiply, divide];

for (let func of operations) {
  let result = func(3, 4);
  console.log(result);
}

const math = {
  sum: add,
  minus: subtract,
  times: multiply,
  division: divide,
};
console.log(math.sum(3, 5));
helloThere("Kevin");
