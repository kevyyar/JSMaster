const person = {
  name: "Kev",
  lastName: "Barreto",
  age: 28,
  occupation: "Teacher/Developer",
  isMarried: true,
  knowsEnglish: true,
};

const palette = {
  red: "#eb4d4b",
  yellow: "#f9ca24",
  blue: "#30336b",
};

// assigning a key with a varible
let mysteryColor = "red";
// accessing the variable within the object
palette[mysteryColor];

// Adding and Updating Data in an Object
let userReviews = {};

userReviews["kevyyar"] = 8.7;

// Nested Objects & Arrays
let student = {
  firstName: "Kev",
  lastName: "Barreto",
  strenghts: ["Teaching", "Programming"],
  exams: {
    midterm: 92,
    final: 78,
  },
};

const avg = (student.exams.midterm + student.exams.final) / 2;
avg;

const game = {
  player1: {
    userName: "Blueballs",
    team: "X",
  },
  player2: {
    userName: "Hairy",
    team: "O",
  },
  board: [
    ["X", null, "O"],
    ["O", "X", null],
    [null, "O", "X"],
  ],
};
let player1 = game.player1.userName;
let player2 = game.player2.userName;
player1;
player2;
