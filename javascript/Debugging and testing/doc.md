1. Debugging Tools
Console Methods

console.log() - normal info

console.error() - error logs

console.table() - tabular data

console.warn() - warnings
```js
let user = { name: "Saiesha", age: 21 };
console.table(user);
```
Debugger Keyword

Pauses execution in dev tools.
```js
let num = 10;
debugger;  // execution stops here
console.log(num);
```
2. Error Handling

We use try...catch and finally.
```js
try {
  let result = JSON.parse("{name: 'Saiesha'}"); // invalid JSON
} catch (err) {
  console.error("Error caught:", err.message);
} finally {
  console.log("Execution finished.");
}
```
3. Unit Testing Basics

Frameworks like Jest or Mocha are used.
```js
Example (Jest style)
// math.js
export function add(a, b) {
  return a + b;
}

// math.test.js (run with Jest)
import { add } from "./math.js";

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
```