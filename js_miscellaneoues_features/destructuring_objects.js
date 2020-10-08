const student = {
    name: 'Kev',
    lastName: 'Barreto',
    age: 28,
    position: 'Web Developer',
    location: 'Mexico',
    isMarried: true,
}

// const {name, lastName} = student;
// assign different variables to existing keys
const {position: job} = student;
//console.log(position) // gives out an error because it doesn't exist anymore
// console.log(job)
const {name, lastName, ...otherInfo} = student;
console.log(name)
console.log(lastName)
console.log(otherInfo)
