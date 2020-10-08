function showFour(a, b, c, d) {
	console.log("a", a);
	console.log("b", b);
	console.log("c", c);
	console.log("d", d);
}

showFour(1, 2, 3, 4);

const colors = ["red", "yellow", "blue", "black"];

showFour(...colors);

///////////////////////////////////////////// Spread in Arrays
const soccerTeams = ["Real Madrid", "Juventus", "Barcelona", "Chivas"];
const nbaTeams = ["Lakers", "Clippers", "Heat", "Bucks"];

const sportTeams = [...soccerTeams, ...nbaTeams];
console.log(sportTeams);

const str = "hello";
const spread = [...str];
console.log(spread);
/////////////////////////////////////////////////// Spread in Objects
const canine = {
	legs: 4,
	family: "Caninae",
	furry: true,
};

const dog = {
	...canine,
	age: 14,
	name: "Figo",
};
console.log(dog);

/////////////////////////////////////////////////// Rest operator in function Arguments
function sum(...nums) {
	return nums.reduce((accumulator, currentVal) => {
		return accumulator + currentVal;
	});
}

console.log(sum(1, 2, 3, 4, 5)); /// output is 15

function name(firstName, lastName, ...titles) {
	console.log(`First Name: ${firstName}`);
	console.log(`Last Name: ${lastName}`);
	console.log(`Title He goes by: ${titles}`);
}

name("Kevin", "Barreto", "Web Developer", "Reader", "Dope Ass Nigga");

const multiply = (...nums) => {
	return nums.reduce((accumulator, currentVal) => {
		return accumulator * currentVal;
	});
};

console.log(multiply(2, 3, 4, 5));

const listOfNames = (...names) => {
	names.forEach((name) => {
		console.log(name);
	});
};

listOfNames("Kevin", "Bryan", "Joe", "Johnny", "Tim", "Colt");

const raceResults = [
	"Kevin",
	"Bryan",
	"Joe",
	"Tommy",
	"Tim",
	"Jonny",
	"Felisha",
];

const [gold, silver, bronze, ...rest] = raceResults;
console.log(gold);
console.log(silver);
console.log(bronze);
console.log(rest);
