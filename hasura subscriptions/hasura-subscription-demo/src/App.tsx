import React, { useState } from "react";
import {
  ApolloProvider,
  useSubscription,
  useMutation,
} from "@apollo/client";
import { client } from "./apolloClient";
import { GET_TODOS, ADD_TODO, TOGGLE_TODO } from "./graphql/todos";

interface Todo {
  id: number;
  title: string;
  is_completed: boolean;
}

function TodoList() {
  const { data, loading } = useSubscription<{ todos: Todo[] }>(GET_TODOS);
  const [addTodo] = useMutation(ADD_TODO);
  const [toggleTodo] = useMutation(TOGGLE_TODO);
  const [text, setText] = useState("");

  if (loading) return <p>Loading...</p>;

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo({ variables: { title: text } });
      setText("");
    }
  };

  const handleToggle = (id: number, is_completed: boolean) => {
    toggleTodo({ variables: { id, is_completed: !is_completed } });
  };

  return (
    <div className="app">
      <h2>Live Todos (Hasura Subscriptions)</h2>
      <div className="input-box">
        <input
          type="text"
          placeholder="Add todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <ul>
        {data?.todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id, todo.is_completed)}
            style={{ cursor: "pointer" }}
          >
            {todo.title} — {todo.is_completed ? " Done" : " Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <TodoList />
    </ApolloProvider>
  );
}
