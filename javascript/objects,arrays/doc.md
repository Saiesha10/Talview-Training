Objects → store key–value pairs.

Arrays → store ordered lists of values.

1. Objects

An object is a collection of properties (key–value pairs).

Declaring an Object
```javascript
let person = {
  name: "Saiesha",
  age: 21,
  isStudent: true
};
```

Accessing Properties
```javascript
console.log(person.name);   // Saiesha
console.log(person["age"]); // 21

//Adding / Updating Properties
person.city = "Bangalore";   // add
person.age = 22;     // update

//Deleting Properties
delete person.isStudent;
```
Object Methods (Functions inside objects)
```javascript
let car = {
  brand: "Tesla",
  start: function() {
    console.log("Car started!");
  }
};
car.start();
```
2. Arrays

An array is an ordered collection of elements (indexed from 0).
```javascript
//Declaring an Array
let fruits = ["apple", "banana", "mango"];

//Accessing Elements
console.log(fruits[0]); // apple
console.log(fruits[2]); // mango

//Modifying Elements
fruits[1] = "orange";
```
3. Array Methods
```javascript
//Adding & Removing
fruits.push("grape");   // add at end
fruits.pop();           // remove last
fruits.shift();         // remove first
fruits.unshift("kiwi"); // add at start

//Iterating
fruits.forEach(fruit => console.log(fruit));

//Other Methods
let numbers = [1, 2, 3, 4, 5];

console.log(numbers.length);        // 5
console.log(numbers.includes(3));   // true
console.log(numbers.indexOf(4));    // 3

console.log(numbers.slice(1, 3));   // [2, 3]
console.log(numbers.concat([6, 7])); // [1,2,3,4,5,6,7]

console.log(numbers.map(n => n * 2));   // [2,4,6,8,10]
console.log(numbers.filter(n => n > 3)); // [4,5]
console.log(numbers.reduce((a, b) => a + b, 0)); // 15
```
4. Array of Objects

Often used in real-world apps.
```javascript
let students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 92 },
  { name: "Charlie", marks: 78 }
];

students.forEach(s => console.log(s.name + " scored " + s.marks));
```
5. Destructuring (ES6+)

Easier way to extract values.
```javascript
// Array destructuring
let [first, second] = ["A", "B", "C"];
console.log(first, second); // A B

// Object destructuring
let { name, age } = person;
console.log(name, age); // Saiesha 22
```
6. Spread & Rest Operators
Spread (...)

Used to copy / expand arrays or objects.
```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1,2,3,4,5]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // {a:1, b:2, c:3}
```
Rest (...)

Collects multiple values into an array.
```javascript
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```