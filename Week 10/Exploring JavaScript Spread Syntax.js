/**
 * JavaScript Spread Syntax Assignment
 *
 * Demonstrates the use of JavaScript's spread syntax across various tasks,
 * highlighting its utility in functions, arrays, and objects. The aim is to showcase how
 * spread syntax can simplify and enhance code readability and flexibility in different scenarios.
 *
 * Overview of Tasks and Thought Process:
 *
 * Task 1: Function Argument Expansion
 * - A function named 'sum' is defined to calculate the sum of three arguments.
 * - An array of numbers is created, and its elements are passed as arguments to the 'sum' function using spread syntax.
 * - The result demonstrates how spread syntax can expand an array into individual function arguments.
 *
 * Task 2: Merging Arrays
 * - Two arrays are merged into a new array using spread syntax.
 * - This showcases the ease of combining arrays without needing traditional looping or array methods like concat().
 *
 * Task 3: Array Element Insertion
 * - Demonstrates the insertion of elements at various positions within an array using spread syntax.
 * - Highlights how spread syntax can seamlessly integrate elements within arrays, enhancing flexibility in array manipulation.
 *
 * Task 4: Cloning and Modifying an Object
 * - Illustrates object cloning with the spread syntax to create a shallow copy of an object.
 * - Modifications are made to the cloned object, showcasing how original objects remain unaffected, promoting immutable data patterns.
 *
 * Task 5: Combining Objects
 * - Two objects are combined into a new object, demonstrating property merging and overwriting.
 * - This task highlights the utility of spread syntax in object manipulation, particularly in the context of defaults, overrides, and combining multiple sources of data.
 *
 * Each task is designed to not only demonstrate a practical use case of spread syntax but also to encourage best practices in JavaScript development.
 * By exploring these tasks, developers can appreciate the power of spread syntax in making their code more concise, flexible, and readable.
 */




// Define a function that takes three arguments and returns their sum
function sum(a, b, c) {
    return a + b + c;
}

// Create an array with three numeric elements
const numbers = [5, 10, 15];

// Call the sum function using spread syntax to pass the elements of numbers as arguments
const result = sum(...numbers);

// Print the result
console.log('Task 1 - Sum Result:', result);  // Should print 30


// Create two arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Merge array1 and array2 into a new array using spread syntax
const mergedArray = [...array1, ...array2];

// Print mergedArray
console.log('Task 2 - Merged Array:', mergedArray); // Should print [1, 2, 3, 4, 5, 6]


// Create an array named colors
const colors = ['red', 'green', 'blue'];

// Use spread syntax to create a new array that includes additional elements
const extendedColors = ['yellow', ...colors, 'purple'];

// Print extendedColors
console.log('Task 3 - Extended Colors:', extendedColors); // Should print ['yellow', 'red', 'green', 'blue', 'purple']


// Define an object named person
const person = { name: 'John', age: 30 };

// Use spread syntax to create a clone of the person object and modify it
const newPerson = { ...person, name: 'Jane', gender: 'female' };

// Print both objects
console.log('Task 4 - Original Person Object:', person);    // Should print { name: 'John', age: 30 }
console.log('Task 4 - Modified New Person Object:', newPerson);  // Should print { name: 'Jane', age: 30, gender: 'female' }


// Create two objects
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

// Combine object1 and object2 into a new object, ensuring properties from object2 overwrite those in object1
const combinedObject = { ...object1, ...object2 };

// Print combinedObject
console.log('Task 5 - Combined Object:', combinedObject); // Should print { a: 1, b: 3, c: 4 }
