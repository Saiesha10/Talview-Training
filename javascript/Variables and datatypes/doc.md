1. Variables in JavaScript

A variable is a container for storing data values.
JavaScript allows us to declare variables using:
var → function-scoped, old way .
let → block-scoped, can be reassigned.
const → block-scoped, cannot be reassigned.

Example:
```javascript
var oldVar = "I am function scoped";
let name = "Saiesha";  // can change later
const PI = 3.14159;    // fixed, cannot be reassigned
```

2. Data Types in JavaScript

JavaScript is dynamically typed, meaning variables can hold values of any type and can change type at runtime.

2.1 Primitive Data Types

Primitives are immutable and stored directly.

String → Text data
```javascript
let str = "Hello, JS!";
```

Number → Both integers and floating-point numbers
```javascript
let num = 42;
let price = 99.99;
```


Boolean → Logical values (true/false)

let isStudent = true;


Null → Intentional empty value

let data = null;


Undefined → Declared but not assigned

let x;  // undefined


BigInt → For very large numbers

let bigNum = 1234567890123456789012345678901234567890n;


Symbol → Unique identifiers

let sym1 = Symbol("id");
let sym2 = Symbol("id");  // not equal to sym1

2.2 Structural (Non-Primitive) Data Types

Objects are collections of properties.

Object → Key-value pairs
```javascript
let person = {
  name: "Saiesha",
  age: 21,
};


//Array → Ordered list of values

let colors = ["red", "green", "blue"];


//Function → Callable object

function greet() {
  console.log("Hello!");
}
```
3. typeof Operator

Used to check the type of a variable.
```javascript
console.log(typeof "Hello");  // string
console.log(typeof 42);       // number
console.log(typeof true);     // boolean
console.log(typeof null);     // object (quirk in JS)
console.log(typeof undefined);// undefined
console.log(typeof {});       // object
console.log(typeof []);       // object (arrays are objects)
console.log(typeof function(){}); // function
```