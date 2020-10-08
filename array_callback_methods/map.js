//// Map Method
const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map(function (t) {
  return t.toUpperCase();
});

const numbers = [20, 21, 22, 23, 24, 25];
const doubleNums = numbers.map(function (num) {
  return num * 2;
});

const words = ["asap", "byob", "rsvp", "diy"];
const upperWords = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});

const isEven = numbers.map(function (num) {
  return {
    value: num,
    isEven: num % 2 === 0,
  };
});

const students = [
  {
    name: "Kevin",
    grade: 12,
    age: 17,
  },
  {
    name: "Bryan",
    grade: 9,
    age: 14,
  },
  {
    name: "Joe",
    grade: 12,
    age: 19,
  },
];

const studentName = students.map(function (name) {
  return name.name;
});
