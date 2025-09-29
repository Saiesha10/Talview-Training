Control flow means the order in which statements are executed in a program.
JavaScript runs code top to bottom, but control flow statements help us make decisions, repeat actions, or skip execution.

1. if / else Statement

Used for decision-making.
```javascript
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```
2. switch Statement

Good when you have multiple conditions.
```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```
3. Loops (Iteration Statements)
(a) for Loop

Runs code a specific number of times.
```javascript
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}
```
(b) while Loop

Repeats while a condition is true.
```javascript
let i = 1;
while (i <= 5) {
  console.log("Number:", i);
  i++;
}
```

(c) do...while Loop

Runs at least once, even if the condition is false.
```javascript
let num = 6;
do {
  console.log("This will run once even if condition is false");
} while (num < 5);
```

4. break Statement

Exits a loop immediately.
```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 1 2 3 4
```

5. continue Statement

Skips the current iteration.
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1 2 4 5
```

6. label with Loops 

Used to control nested loops.
```javascript
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) break outer;
    console.log(i, j);
  }
}
```

7. for...in Loop

Iterates over object properties.
```javascript
let person = { name: "Saiesha", age: 20 };

for (let key in person) {
  console.log(key + ":", person[key]);
}
```

8. for...of Loop

Iterates over iterable objects (like arrays).
```javascript
let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
```