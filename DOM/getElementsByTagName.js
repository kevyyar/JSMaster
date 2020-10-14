const inputs = document.getElementsByTagName("input");
const listItems = document.getElementsByTagName("li");
const h1 = document.getElementsByTagName("h1");
console.log(inputs);
console.log(listItems);
console.log(h1);

for (let input of inputs) {
	console.log(input);
}

// converts it into an array
const inputArr = [...inputs];
console.log(inputArr);
