1. Component-Based Architecture

React is built around components, which are reusable, independent pieces of UI.

Components make code modular and maintainable.

Two main types:

Functional components → simple, use functions to return JSX.

Class components : ES6 classes, can have state & lifecycle methods (less common with Hooks now).

Example (Functional Component):
```js
function Greeting() {
  return <h1>Hello, Saiesha!</h1>;
}
```
2. JSX Syntax

JSX allows writing HTML-like syntax inside JavaScript.

JSX is transpiled to React.createElement() by Babel.

Can embed JavaScript expressions using {}.

Example:
```js
const name = "Saiesha";
const element = <h1>Hello, {name}!</h1>;
```
3. Virtual DOM

React uses a Virtual DOM to improve performance.

Instead of updating the real DOM every time, React updates a lightweight copy first and diffs the changes.

Only necessary changes are applied to the real DOM → faster UI updates.

4. Props and State

Props (Properties)

Data passed from parent to child component.

Read-only, cannot be modified by child.

Example:
```js
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

<Welcome name="Saiesha" />
```

State

Data internal to a component that can change over time.

Managed using useState hook in functional components.

Example:
```js
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
5. Lifecycle Methods

Lifecycle methods allow class components to run code at specific stages: mounting, updating, unmounting.

componentDidMount() :runs after component is added to DOM

componentDidUpdate() : runs after updates

componentWillUnmount() : cleanup before removing

Functional components use useEffect hook to replicate lifecycle behavior:
```js
import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval); 
  }, []);

  return <p>Seconds: {seconds}</p>;
}
```