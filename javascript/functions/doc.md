function is a reusable block of code designed to perform a task.
Instead of repeating code, we can define once and use multiple times.

1. Function Declaration

Standard way of defining a function.
```javascript
function greet() {
  console.log("Hello, World!");
}
greet(); 
```

2. Function Parameters & Arguments

Parameters → Variables in function definition.

Arguments → Values passed when calling the function.
```javascript
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8
```
3. Default Parameters

If no argument is provided, default values are used.
```javascript
function greet(name = "Guest") {
  console.log("Hello, " + name);
}
greet();       
greet("Saiesha"); 
```
4. Function Expressions

Functions can be stored in variables.
```javascript
const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(4, 5)); // 20
```
5. Arrow Functions 

Shorter syntax for writing functions.
```javascript
const square = (n) => n * n;
console.log(square(6)); // 36
```
6. Function Scope

Variables inside a function are local to that function.

Outer variables can be accessed inside, but not the reverse.
```javascript
let globalVar = "outside";

function testScope() {
  let localVar = "inside";
  console.log(globalVar); // accessible
  console.log(localVar);  // accessible
}
testScope();
console.log(globalVar);  // works
// console.log(localVar); // ❌ error (not defined)
```
7. Returning Values

Functions can return values with return.
```javascript
function calculateArea(r) {
  return 3.14 * r * r;
}
console.log(calculateArea(5)); // 78.5
```
8. Anonymous Functions

Functions without a name (often used in callbacks).
```javascript
setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);
```
9. Higher-Order Functions

A function that takes another function as argument or returns a function.
```javascript
function operation(a, b, func) {
  return func(a, b);
}

console.log(operation(5, 3, (x, y) => x + y)); // 8
console.log(operation(5, 3, (x, y) => x * y)); // 15
```
10. Closures 

A closure is when a function remembers its lexical scope even when called outside.
```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```