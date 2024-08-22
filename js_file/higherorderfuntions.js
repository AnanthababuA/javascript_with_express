

//  1. Map function

// Example array
const numbers = [1, 2, 3, 4, 5];

// Using map to double each number
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Using map to convert an array of strings to uppercase
const names = ["john", "jane", "jim"];
const uppercasedNames = names.map(name => name.toUpperCase());
console.log(uppercasedNames); // Output: ["JOHN", "JANE", "JIM"]


// 2. filter

// Example array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Using filter to get names starting with 'J'
// const names = ["john", "jane", "jim", "jack", "jill", "bob"];
const jNames = names.filter(name => name.startsWith("j"));
console.log(jNames); // Output: ["john", "jane", "jim", "jack", "jill"]


// 3. Reduce

// Example array
// const numbers = [1, 2, 3, 4, 5];

// Using reduce to sum up all numbers
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Using reduce to count the frequency of characters in a string
const sentence = "the quick brown fox jumps over the lazy dog";
const charFrequency = sentence.split("").reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});
console.log(charFrequency);
// Output: { t: 2, h: 2, e: 3, q: 1, u: 2, i: 1, c: 1, k: 1, b: 1, r: 2, o: 4, w: 1, n: 1, f: 1, x: 1, j: 1, m: 1, p: 1, s: 1, v: 1, l: 1, y: 1, d: 1, g: 1 }