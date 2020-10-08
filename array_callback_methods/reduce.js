const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((accumulator, currentValue) => {
	return accumulator * currentValue;
});

// console.log(product);

const grades = [87, 88, 76, 93, 96, 65, 72, 88, 90];

const maxGrades = grades.reduce((max, currentVal) => {
	if (currentVal > max) {
		return currentVal;
	} else {
		return max;
	}
});

// console.log(maxGrades);
////////////// Initial Value in reduce method
const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
	return sum + currVal;
}, 1000);
// console.log(sum);

const votes = ["y", "y", "n", "y", "n", "n", "n", "y", "n", "y", "y", "y"];

const results = votes.reduce((tally, currentVote) => {
	if (tally[currentVote]) {
		tally[currentVote]++;
	} else {
		tally[currentVote] = 1;
	}

	return tally;
}, {});

console.log(results);
