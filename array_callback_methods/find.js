let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]

// returns True if found
const movie = movies.find(movie => {
    return movie.includes("Mrs");
});

// console.log(movie)

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    ratings: 4.25,
  },
  {
    title: "Bones: The Complete Edition",
    authors: ["Jeff Smith"],
    ratings: 4.78,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    ratings: 4.11,
  },
];

const jeffBook = books.find(book => book.includes('Jeff'));
// console.log(jeffBook)
const bestBook = books.find(b => b.ratings > 4.5);
// console.log(bestBook);

