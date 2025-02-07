import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";  // For Next.js routing
import { auth } from "./firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();  // To navigate after successful login

  const handleLogin = async (e) => {
    e.preventDefault();  // Prevent form submission

    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");

      // Redirect to the account page upon successful login
      router.push("/account");  // Or use `window.location.href` if not using Next.js
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
      console.error(err.message);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}  {/* Display error if login fails */}
    </div>
  );
}
