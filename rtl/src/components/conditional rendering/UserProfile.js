// src/components/UserProfile.js
export default function UserProfile({ user }) {
  return (
    <div>
      {user ? (
        <h1>Welcome, {user.name}!</h1>
      ) : (
        <h1>Please login</h1>
      )}
    </div>
  );
}
