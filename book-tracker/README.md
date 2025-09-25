 REST (Representational State Transfer)

REST is an architecture style for building APIs.
It allows cliets (like your React app) to communicate with servers using HTTP methods.
The server exposes resources (data/entities), and the client interacts with them.

HTTP Methods
Method	Action	Example

GET	Read/fetch data	GET /users → fetch list of users

POST	Create new data	POST /users → add a new user

PUT	Update existing data	PUT /users/1 → update user with ID 1

PATCH	Partial update	PATCH /users/1 → update only one field

DELETE	Remove data	DELETE /users/1 → delete user

Example REST API Endpoint

GET https://api.example.com/users

Response:
[
  { "id": 1, "name": "Saiesha" },
  { "id": 2, "name": "Chandan" }
]

Characteristics of REST:

Stateless: Server does not store client state; each request is independent.

Resource-based: Everything is a resource, accessible via a URL.

Standard HTTP methods: CRUD operations are mapped to GET, POST, PUT, DELETE.

Use of JSON: Most REST APIs use JSON to send/receive data.

Integrating REST APIs in React:

Use useEffect: For fetching data when the component mounts.

Loading & Error states: Always handle loading and errors to improve UX.

State management: For bigger apps, consider Redux or Zustand.

Environment variables: Store API URLs in .env for security.

Fetching Data from REST API example 

can use either fetch (built-in) or axios (popular library).

Using fetch
import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // Sample REST API
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
