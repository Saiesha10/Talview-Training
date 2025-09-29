JavaScript is single-threaded (executes one thing at a time), but many operations (like fetching data, reading files, timers) need to run without blocking the main thread.

1. Synchronous vs Asynchronous

Synchronous Code runs line by line. One task must finish before the next starts.
Asynchronous some tasks can run in the background, and the program continues executing other code.
```js
// Synchronous
console.log("Start");
console.log("Middle");
console.log("End");

// Asynchronous
console.log("Start");
setTimeout(() => console.log("Async Task Done"), 2000);
console.log("End");


/*Output:

Start
End
Async Task Done*/
```
2. Callbacks

A callback is a function passed as an argument to another function, executed later.
```js
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData((msg) => console.log(msg));
```

Problem: Callback Hell (nested callbacks -messy code).

3. Promises

A Promise represents a value that will be available now, later, or never.

States:

pending

fulfilled (resolved)

rejected
```js
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Task completed!");
  else reject("Task failed!");
});

promise
  .then((msg) => console.log(msg))    // when resolved
  .catch((err) => console.log(err))   // when rejected
  .finally(() => console.log("Done")); // always runs
```
4. async / await

A modern way to write asynchronous code.
It looks synchronous but works asynchronously.
```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 2000);
  });
}

async function getData() {
  console.log("Fetching...");
  let result = await fetchData(); // waits for promise
  console.log(result);
}

getData();
```
5. Real-world Example: Fetch API (Asynchronous HTTP Requests)
```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));


//With async/await:

async function loadPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
loadPost();
```