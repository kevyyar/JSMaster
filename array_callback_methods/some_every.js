const words = ["dog", "dig", "log", "bag", "wag"];

const all3Letters = words.every((word) => word.length === 3);
// console.log(all3Letters);

const allEndInG = words.every((word) => {
    const lastLetter = word.length - 1;
    return word[lastLetter] === "g";
});
// console.log(allEndInG);
/////////////////////////////////////////////////////

const someStartWithD = words.some((word) => word[0] === "d");
console.log(someStartWithD);
