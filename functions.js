function rollDice() {
	let roll = Math.floor(Math.random() * 10) + 1;
	console.log(`Dice rolled is ${roll}`);
}

// rollDice();
function throwDice(numRolls) {
	for (let i = 0; i < numRolls; i++) {
		rollDice();
	}
}

throwDice(10);
//////////////// Function with Multiple Args
function sum(a, b) {
	console.log(a * b);
}

sum(10, 4);
////////////////////// Return on Functions
function containsBlue(arr) {
	for (let color of arr) {
		if (color === "purple" || color === "blue") {
			return true;
		}
	}
	return false;
}
