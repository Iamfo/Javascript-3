// Exercise 1: forEach()
const numbers1 = [10, 20, 30, 40, 50];

function doubleAndLog(array) {
  array.forEach(num => console.log(num * 2));
}

doubleAndLog(numbers1);


// Exercise 2: map()
const people = [
  { firstName: "Mario", lastName: "Rossi", age: 32 },
  { firstName: "Giulia", lastName: "Bianchi", age: 27 },
  { firstName: "Carlo", lastName: "Verdi", age: 45 }
];

function getFullNames(peopleArray) {
  return peopleArray.map(person => `${person.firstName} ${person.lastName}`);
}

console.log(getFullNames(people));


// Exercise 3: filter()
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(array) {
  return array.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers(numbers3));


// Exercise 4: find()
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Keyboard", price: 80 },
  { name: "Mouse", price: 25 },
  { name: "USB Cable", price: 15 },
  { name: "Monitor", price: 300 }
];

function findCheapProduct(products) {
  return products.find(product => product.price < 20);
}

console.log(findCheapProduct(products));


// Exercise 5: reduce()
const transactions = [
  { id: 'T1', amount: 150 },
  { id: 'T2', amount: 230 },
  { id: 'T3', amount: 50 },
  { id: 'T4', amount: 175 }
];

function calculateTotalSales(transactions) {
  return transactions.reduce((total, t) => total + t.amount, 0);
}

console.log(calculateTotalSales(transactions));


// Exercise 6: sort()
const students = [
  { name: "Luca", grade: 85 },
  { name: "Marco", grade: 92 },
  { name: "Anna", grade: 78 },
  { name: "Sofia", grade: 95 },
  { name: "Paolo", grade: 88 }
];

function sortStudentsByGrade(students) {
  return students.sort((a, b) => b.grade - a.grade);
}

console.log(sortStudentsByGrade(students));


// Exercise 7: push()
let shoppingList = ["milk", "bread", "eggs"];

function addItemsToList(list, ...newItems) {
  list.push(...newItems);
  return list.length;
}

console.log("New length:", addItemsToList(shoppingList, "apples", "cheese", "chocolate"));
console.log("Updated list:", shoppingList);


// Exercise 8: join()
const words = ["JavaScript", "is", "a", "powerful", "language"];

function createSentence(wordsArray) {
  return wordsArray.join(" ") + ".";
}

console.log(createSentence(words));


// Exercise 9: findIndex()
const numbers9 = [12, 7, 14, 35, 8, 22, 10, 9];

function findDivisibleByFive(array) {
  return array.findIndex(num => num % 5 === 0);
}

console.log("Index:", findDivisibleByFive(numbers9));


// Exercise 10: splice()
const colors = ["red", "green", "blue", "yellow", "orange"];

function replaceElements(array, startIndex, deleteCount, ...newElements) {
  return array.splice(startIndex, deleteCount, ...newElements);
}

const removedElements = replaceElements(colors, 1, 2, "purple", "pink");
console.log("Removed elements:", removedElements); // ["green", "blue"]
console.log("Modified array:", colors);


// Bonus Exercise: Chain multiple methods
const numbersBonus = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function processNumbers(array) {
  return array
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .sort((a, b) => b - a)
    .reduce((sum, num) => sum + num, 0);
}

console.log("Result of chained operations:", processNumbers(numbersBonus));