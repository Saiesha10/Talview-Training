
export default function LoginForm({ onSubmit }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <input placeholder="Email" type="email" />
      <input placeholder="Password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}
