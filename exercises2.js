function isValidPassword(pass, user) {
	if (pass.length < 8) {
		return false;
	}
	if (pass.indexOf(" ") !== -1) {
		return false;
	}
	if (pass.indexOf(user) !== -1) {
		return false;
	}

	return true;
}
/////////////////////////////////
function averageVal(arr) {
	let sum = 0;
	for (num of arr) {
		sum += num;
	}
	return sum / arr.length;
}

averageVal([1, 43, 56, 21]);
//////////////////////////////////
function isPangram(sentence) {
	let loweredCase = sentence.toLowerCase();
	for (char of "abcdefghijklmnopqrstuvopqrstuvwxyz") {
		if (!loweredCase.includes(char)) {
			return false;
		}
	}
	return true;
}
///////////////////////////////////
function pick(arr) {
	// return random element from array
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

function getCard() {
	const values = [
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"J",
		"Q",
		"K",
		"A",
	];

	const suits = ["clubs", "spades", "hearts", "diamonds"];
	return {value: pick(values), suit: pick(suits)};
}
