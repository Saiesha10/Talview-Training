// src/components/TodoList.js
export default function TodoList({ items }) {
  if (!items.length) return <p>No items</p>;

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
