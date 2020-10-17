let shoppingList = ["cereal", "ice", "cheese"];
let lotto = [45, 112, 23, 25, 34];
let myRandomCollection = [12, "dog", true, null, NaN];

console.log(shoppingList);
console.log(lotto);
console.log(myRandomCollection);
/////////////////////////////// Accesing Info inside Arrays
shoppingList[0];
shoppingList[1];
shoppingList[2];
//get the last element of the array
shoppingList[shoppingList.length - 1];

/////////////////////////////// Modifying Arrays
let storeItems = ["cheddar cheese", "2% milk"];
// Update a value
storeItems[1] = "Whole Milk";
storeItems[0] = "Queso Oaxaca";
storeItems;
// add item to end of array
storeItems.push("Chocolate Cake");
storeItems;
// remove item from end of array
const sportTeams = ["Lakers", "Barcelona", "Real Madrid", "NY Yankees"];
sportTeams.pop();
sportTeams;
// add element to the beginning of Array
let dishesToDo = ["big platter", "bowl", "forks"];
dishesToDo.unshift("spoons");
dishesToDo.unshift("big plate");
dishesToDo;
// remove the first element of Array
dishesToDo.shift();
dishesToDo;
// concat different Arrays
let fruits = ["apple", "banana"];
let veggies = ["broccoli", "onion", "asparagus"];
let meats = ["steak", "chicken"];
let allFoods = fruits.concat(meats, veggies);
fruits.concat(veggies);
veggies.concat(fruits);
allFoods;
// Check if Array has an element
let ingredients = ["water", "corn starch", "cheese", "flour", "shrimp"];
ingredients.includes("shrimp");
ingredients.includes("juice");
// Join elements together in Arrays
let letters = ["R", "E", "S", "P", "E", "C", "T"];
// letters.reverse();
letters.join("");
// Sort numbers in an Array
let nums = [34, 10, 28, 8, 24];
nums.sort();
