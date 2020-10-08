const prices = [400.5, 3000, 99.99, 35.99, 12.0];

const ascendingSort = prices.slice().sort((a, b) => a - b);
const descendingSort = prices.slice().sort((a, b) => b - a);

console.log(ascendingSort);
console.log(descendingSort);

const books = [
	{
		title: "Good Omens",
		authors: ["Terry Pratchett", "Neil Gaiman"],
		ratings: 4.25,
		genres: ["fiction", "fantasy"],
	},
	{
		title: "Changing My Mind",
		authors: ["Zadie Smith"],
		ratings: 3.83,
		genres: ["nonfiction", "essays"],
	},
	{
		title: "Bone: The Complete Edition",
		authors: ["Jeff Smith"],
		ratings: 4.42,
		genres: ["fiction", "graphic novel", "fantasy"],
	},
	{
		title: "American Gods",
		authors: ["Neil Gaiman"],
		ratings: 4.11,
		genres: ["fiction", "fantasy"],
	},
	{
		title: "The Name of the Wind",
		authors: ["Richard Powers"],
		ratings: 4.19,
		genres: ["fiction", "short stories"],
	},
	{
		title: "The Overstory",
		authors: ["Richard Powers"],
		ratings: 4.19,
		genres: ["fiction", "short stories"],
	},
	{
		title: "The Way of Kings",
		authors: ["Brandon Sanderson"],
		ratings: 4.69,
		genres: ["fantasy", "epic"],
	},
];

const bestBooks = books.sort((a, b) => b.ratings - a.ratings);
console.log(bestBooks);
