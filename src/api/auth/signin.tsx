import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../../data/users.ts";

const SignIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userId", user.id.toString());
      navigate("/");
    } else {
      setError("Nieprawidłowa nazwa użytkownika lub hasło");
    }
  };

  return (
    <div>
      <h1>Logowanie</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nazwa użytkownika"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Zaloguj się</button>
      </form>
    </div>
  );
};

export default SignIn;
