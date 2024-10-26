import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userId");
    navigate("/signin");
  };

  return (
    <div>
      <h1>Strona główna</h1>
      <p>Witaj na stronie głównej aplikacji Novel Reader!</p>
      <button onClick={handleLogout}>Wyloguj się</button>
    </div>
  );
};

export default Home;
