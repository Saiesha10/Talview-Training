1. Template Literals

Use backticks (`) instead of quotes.

Allow multi-line strings and string interpolation.
```js
let name = "Saiesha";
let msg = `Hello ${name}!`;
console.log(msg);

let multiLine = `This is
a multi-line
string.`;
console.log(multiLine);
```
2. Arrow Functions

Shorter syntax for functions.

They don’t have their own this.
```js
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 3));
```
3. Default Parameters

Set default values for function parameters.
```js
function greet(name = "Guest") {
  return `Hello, ${name}`;
}

console.log(greet());        // Hello, Guest
console.log(greet("Saiesha")); // Hello, Saiesha
```
4. Destructuring

Extract values from arrays or objects easily.
```js
// Array destructuring
let [a, b] = [10, 20];
console.log(a, b);

// Object destructuring
let person = { name: "Saiesha", age: 21 };
let { name, age } = person;
console.log(name, age);
```
5. Classes

Introduced as syntactic sugar for prototypes.
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I’m ${this.name} and I’m ${this.age} years old.`;
  }
}

let p1 = new Person("Saiesha", 21);
console.log(p1.greet());
```
6. Modules
split code into different files using export & import.

7. Promises

Handle asynchronous operations (like API calls).

Have resolve (success) and reject (failure).
```js
let fetchData = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) resolve("Data fetched!");
    else reject("Error fetching data");
  }, 1000);
});

fetchData
  .then(data => console.log(data))
  .catch(err => console.log(err));
```
