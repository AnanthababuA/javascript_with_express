let x = 42;
console.log(typeof x); // Output: "number"

let y = "hello";
console.log(typeof y); // Output: "string"

let z = true;
console.log(typeof z); // Output: "boolean"


console.log(typeof 42); // Output: "number"
console.log(typeof "hello"); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object" (this is a known bug in JavaScript)
console.log(typeof {}); // Output: "object"
console.log(typeof []); // Output: "object"
console.log(typeof function() {}); // Output: "function"