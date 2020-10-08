const bestCartoons = [
    'Eddy Bravo',
    'Powder Puff Girls',
    'Scooby Doo',
    'Rocket Power',
    'Dexter',
    'Power Rangers',
    'Cowardly Dog',
];

// takes the order of the array and assigns to it. You can skip an element by using a comma.
const [gold, silver, bronze, ...others] = bestCartoons;
console.log(`1st place: ${gold}`)
console.log(`2nd place: ${silver}`)
console.log(`3rd place: ${bronze}`)
console.log(`Rest of Cartoons: ${others}`)
