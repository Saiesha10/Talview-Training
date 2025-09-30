// ProfileCard.jsx
function ProfileCard({ name, age, role }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      margin: "10px",
      borderRadius: "10px",
      boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
      textAlign: "center",
      width: "150px"
    }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

function ProfileList() {
  const users = [
    { name: "Saiesha", age: 21, role: "intern" },
    { name: "pahal", age: 25, role: "intern" },
  ];

  return (
    <div style={{ display: "flex" }}>
      {users.map(user => <ProfileCard key={user.name} {...user} />)}
    </div>
  );
}
