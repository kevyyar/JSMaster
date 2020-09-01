if (1 === 1) {
  console.log("It's true!");
}

// Example #1
let rating = 4;
if (rating === 3) {
  console.log("You are a SUPERSTAR!");
} else {
  console.log("You are a NOT A SUPERSTAR!");
}

// Example #2
let num = 29;

if (num % 2 !== 0) {
  console.log("The number is odd");
} else {
  console.log("The number is even");
}

// Example #3
let highScore = 1430;
let userScore = 1800;

if (userScore >= highScore) {
  console.log(`Congrats now you have the highest score of ${userScore}`);
} else {
  console.log(`You don't have the highest score of this game... Yet`);
}

// Example #3
let password = "hello";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log(`Valid Password`);
  } else {
    console.log(`Password is long but it cannot contain spaces`);
  }
} else {
  console.log(`Password must be longer`);
}

// Example #3
let mystery = 5;
if (mystery) {
  console.log("TRUTHY");
} else {
  console.log("Falsy");
}

// Example #4
let name = "Joe";

if (name !== "Kevin") {
  console.log(`Your name is not Kev`);
} else {
  console.log(`Your name is Kev`);
}

// Example #4
let password1 = "helloend";

if (password1.length >= 8 && password1.indexOf(" ") === -1) {
  console.log(`Valid Password`);
} else {
  console.log(`Invalid Password`);
}

// Example #4
let number = 5;

if (number >= 1 && number <= 10) {
  console.log(`The number ${number} is in range`);
} else {
  console.log(`The number ${number} is not in range`);
}

// Example #4
let color = "blue";
if (color === "white" || color === "black" || color === "grey") {
  console.log(`Great choice of color`);
} else {
  console.log(`Hmmm. not a good color in my opinion`);
}
