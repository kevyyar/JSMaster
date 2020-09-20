function callThreeTimes(func) {
  func();
  func();
  func();
}

function cry() {
  console.log("im so sad muah");
}

function help() {
  console.log("HELP!!!");
}

function rage() {
  console.log("I am very MAD!!");
}

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(cry, 20);

function pickOne(func1, func2) {
  let randomNum = Math.random();
  console.log(randomNum);
  if (randomNum < 0.5) {
    func1();
  } else {
    func2();
  }
}

//////////// Function as Return Values

function multiplBy(num) {
  return function (x) {
    return x * num;
  };
}

const double = multiplBy(2);
const triple = multiplBy(3);
const halve = multiplBy(0.5);

function makeBetweenFunc(x, y) {
  return function (num) {
    if (num >= x && num <= y) {
      return true;
    }
    return false;
  };
}

const isInNineties = makeBetweenFunc(1992, 1999);
const isLegalAge = makeBetweenFunc(18, 90);

function subYears(x, y) {
  return function (months) {
    return months > x && months < y;
  };
}

const canPay = subYears(18, 24);
