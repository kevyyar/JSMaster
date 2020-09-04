// For Loop
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
    grade: 77,
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


const word = 'stressed'

for(let i = 0; i < word.length)
