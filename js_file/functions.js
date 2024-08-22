// Pure function
function add1(a, b) {
    return a + b;
  }

  const c = add1(2, 4)

  console.log("c", c)
  
  // Impure function
  // let x = 5;
  // function increment() {
  //   x++;
  // }

  // console.log("x", x)


    // Immutable update
    const newArray = oldArray.concat([newItem]);

    // Mutable update
    oldArray.push(newItem);

    // Higher-Order Functions:

    // Using map
    const doubledNumbers = [1, 2, 3].map(x => x * 2);

    // Using filter
    const evenNumbers = [1, 2, 3, 4].filter(x => x % 2 === 0);

    // Using reduce
    const sum = [1, 2, 3].reduce((acc, x) => acc + x, 0);

    // Curried function
    const add = a => b => a + b;

    // Using the curried function
    const add5 = add(5);
    const result = add5(3); // 8


    // Composing functions
const compose = (f, g) => x => f(g(x));

// Using compose
const increment = x => x + 1;
const double = x => x * 2;
const incrementThenDouble = compose(double, increment);
const result1 = incrementThenDouble(3); // 8

// Recursive factorial function
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  const result2 = factorial(5); // 120

// 1.Function Declaration

  function greet() {
    console.log("Hello, world!");
  }
  greet(); // Output: Hello, world!

//   Function declarations are hoisted, meaning they can be called before they are defined in the code.


//   2.Function Expression:

const sayGoodbye = function() {
    console.log("Goodbye!");
  };
  sayGoodbye(); // Output: Goodbye!

// Function expressions are not hoisted, so they must be defined before they are called.

// 3. Arrow Function:

const add3 = (a, b) => a + b;
console.log(add3(5, 3)); // Output: 8

// 4. Asyn function

async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  return response.json();
}
fetchData().then(data => console.log(data));