const numbers = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

numbers.forEach(function (num) {
  console.log(num * 2);
});

function printTriple() {
  console.log(n * 3);
}

// numbers.forEach(printTriple);
//
const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    ratings: 4.25,
  },
  {
    title: 'Bones: The Complete Edition',
    authors: ['Jeff Smith'],
    ratings: 4.42,
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    ratings: 4.11,
  },
];

books.forEach(function (book) {
  console.log(book.title.toUpperCase());
});

for (let book of books) {
  console.log(book.title.toUpperCase());
}
