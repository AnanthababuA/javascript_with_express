// 1. Creation:

const fruits = ["Apple", "Banana", "Cherry"]; // Array literal
const numbers = new Array(1, 2, 3, 4); // Array constructor

//  2. Accessing Elements:

console.log(fruits[0]); // Output: Apple

// 3. length

console.log(fruits.length); // Output: 3

// 4. Push

fruits.push("Mango");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Mango"]

// 5. pop

const lastFruit = fruits.pop();
console.log(lastFruit); // Output: Mango

//  6. shift - Removes the first element from an array and returns that element.

const firstFruit = fruits.shift();
console.log(firstFruit); // Output: Apple

//  7. unshift - Adds one or more elements to the beginning of an array.

fruits.unshift("Strawberry");
console.log(fruits); // Output: ["Strawberry", "Banana", "Cherry"]

// 8. Slice

const citrus = fruits.slice(1, 3);
console.log(citrus); // Output: ["Banana", "Cherry"]

// 9. foreach()

fruits.forEach(fruit => console.log(fruit));

//  10. some():

const hasLongFruit = fruits.some(fruit => fruit.length > 6);
console.log(hasLongFruit); // Output: true

// 11. every()

const allLongFruits = fruits.every(fruit => fruit.length > 5);
console.log(allLongFruits); // Output: false