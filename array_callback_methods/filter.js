const nums = [1,2,3,4,5,6,7,8,9,10]

const oddNums = nums.filter(n => n % 2 === 1)
console.log(oddNums)
const evenNums = nums.filter(n => n % 2 === 0)
console.log(evenNums)

//////////////////
const books = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        ratings: 4.25,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'Changing My Mind',
        authors: ['Zadie Smith'],
        ratings: 3.83,
        genres: ['nonfiction', 'essays']
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        ratings: 4.42,
        genres: ['fiction', 'graphic novel', 'fantasy']
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        ratings: 4.11,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'The Name of the Wind',
        authors: ['Richard Powers'],
        ratings: 4.19,
        genres: ['fiction', 'short stories']
    },
    {
        title: 'The Overstory',
        authors: ['Richard Powers'],
        ratings: 4.19,
        genres: ['fiction', 'short stories']
    },
    {
        title: 'The Way of Kings',
        authors: ['Brandon Sanderson'],
        ratings: 4.69,
        genres: ['fantasy', 'epic']
    }
]

const goodBooks = books.filter(b => b.ratings > 4.3)
// console.log(goodBooks)

const fantasyBooks = books.filter(book => {
    return book.genres.includes('fantasy')
})

console.log(fantasyBooks)