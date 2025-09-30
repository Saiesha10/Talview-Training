1. Functional vs Class Components

Functional Components

Simple functions that return JSX.

Preferred in modern React with Hooks.

Class Components

ES6 classes extending React.Component.

Can have state and lifecycle methods.
```js
//Example (Functional Component):

function Greeting() {
  return <h1>Hello, Saiesha!</h1>;
}


//Example (Class Component):

import React from "react";

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```
2. Understanding Props vs State

Props : Passed from parent - child. Read-only.

State : Internal to a component. Can change.

Props Example:
```js
function Welcome(props) {
  return <h1>Welcome, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Saiesha" />
      <Welcome name="John" />
    </div>
  );
}
```

State Example:
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
 3. Passing Props Between Components

Props allow data flow from parent to child.

Helps create dynamic components.

Example:
```js
function Profile({ name, age }) {
  return <p>{name} is {age} years old.</p>;
}

function App() {
  return (
    <div>
      <Profile name="Saiesha" age={21} />
      <Profile name="John" age={25} />
    </div>
  );
}
```
4. Updating State


State changes trigger re-rendering.

Never modify state directly (state.count = 1 → wrong).

Use setState (class) or useState setter (functional).

Functional Component Example:
```js
function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
```
5. Component Composition


Components can contain other components.

Promotes reusability and modularity.

Example:
```js
function Card({ title, content }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card title="Card 1" content="This is card 1" />
      <Card title="Card 2" content="This is card 2" />
    </div>
  );
}
```