//////////////////////// For Loop
for (let i = 0; i <= 10; i++) {
  console.log(`Number is ${i}`);
}

// For loops in Arrays
const animals = ["lion", "tiger", "monkey", "elephant"];

for (let i = 0; i < animals.length; i++) {
  console.log(`The animal is ${animals[i]}`);
}

const students = [
  {
    name: "Kev",
    grade: 97,
  },
  {
    name: "Joe",
    grade: 88,
  },
  {
    name: "Bryan",
    grade: 98,
  },
];

for (let i = 0; i < students.length; i++) {
  let student = students[i];
  console.log(`The student ${student.name} scored ${student.grade}`);
}

const word = "stressed";

for (let i = word.length - 1; i >= 0; i--) {
  console.log(word[i]);
}
o; // Average Student's grades
let total = 0;
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  total += student.grade;
}
total / 3;

// Nested Loops
const gameBoard = [
  [12, 23, 4, 5],
  [1, 8, 12, 11],
  [7, 44, 13, 90],
  [0, 34, 1, 33],
];

for (let i = 0; i < gameBoard.length; i++) {
  console.log(gameBoard[i]);
  for (let j = 0; j < gameBoard[i].length; j++) {
    console.log(gameBoard[i][j]);
  }
}

/////////////////////////////// While Loops
let i = 0;

while (i <= 10) {
  console.log(`Number is: ${i}`);
  i++;
}

// Guess random number
let target = Math.floor((Math.random() * 10) - 1)
let guess = Math.floor((Math.random() * 10) - 1)

while(guess !== target) {
  console.log(`Target is : ${target} : Guess is ${guess}`)
  guess = Math.floor((Math.random() * 10) - 1)
}
 
console.log(`YOU WIN! The target was ${target} and you also guessed ${guess}`)

///////////////////////////////// For of Loops
const animals = ['tiger', 'lion', 'monkey','gorilla', 'giraffe']

for(let animal of animals) {
  console.log(animal)
}

let string = 'hellotheremydude'

for(let char of string) {
  console.log(string.toUpperCase())
}

///////////////////////////////// Nested For of Loops with Arrays
const magicBoard = [[1,4,10],[11,1,3],[2,6,7]]

for(let row of magicBoard) {
  let sum = 0;
  for(let num of row) {
    sum+=num
  }
  console.log(`${row} summed to ${sum}`)
}

//////////////////////////////// Iterate an Object with For of Loop
const movieReviews = {
  Batman: 8.5,
  'The Joker': 9.5,
  'The Revenant': 8.9,
  'The Avengers End Game': 9.3,
  Django: 8.7
}

const ratings = Object.values(movieReviews)
let total = 0;

for (let r of ratings) {
  total += r
}
let avg = total / ratings.length

console.log(total)

//////////////////////////////// Iterate an Object with For In Loop
const user = {
  name: 'Kev',
  age: 28,
  occupation: 'Developer/Teacher',
  isMarried: true
}

for (let info in user) {
  console.log(user[info])
}