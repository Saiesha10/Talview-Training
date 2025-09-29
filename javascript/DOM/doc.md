The DOM (Document Object Model) is a tree-like structure that represents the content of a web page.
JavaScript can manipulate HTML and CSS using the DOM → allowing us to change content, structure, and style dynamically.


1. What is the DOM?

When a web page loads, the browser creates a DOM tree of HTML elements.
Each element becomes a node that JavaScript can access and modify.

Example HTML:
```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello World</h1>
    <p class="desc">This is a paragraph.</p>
  </body>
</html>
```

2. Accessing Elements

We can select elements using:
```js
document.getElementById("title");      // by id
document.getElementsByClassName("desc"); // by class (HTMLCollection)
document.getElementsByTagName("p");   // by tag name

document.querySelector("#title");     // CSS selector (first match)
document.querySelectorAll(".desc");   // CSS selector 
```
3. Changing Content
```js
let title = document.getElementById("title");
title.innerText = "Welcome to DOM!";   // changes text
title.innerHTML = "<i>Welcome</i>";   // can add HTML
```
4. Changing Styles
```js
title.style.color = "blue";
title.style.fontSize = "30px";
```
5. Creating & Appending Elements
```js
let newItem = document.createElement("li");
newItem.innerText = "New List Item";

let list = document.getElementById("myList");
list.appendChild(newItem);
```
6. Removing Elements
```js
list.removeChild(newItem);
```
7. Event Handling

Events allow user interaction (clicks, typing, etc.).
```js
let button = document.getElementById("btn");

button.addEventListener("click", function() {
  alert("Button Clicked!");
});
```
8. Modifying Attributes
```js
let img = document.getElementById("myImage");
img.setAttribute("src", "newimage.jpg");
img.setAttribute("alt", "New Image");
```