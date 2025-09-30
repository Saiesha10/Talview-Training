// Counter.jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: "10px" }}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
