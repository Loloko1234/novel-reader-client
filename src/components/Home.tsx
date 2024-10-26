import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Home: React.FC = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <div>
      <h1>Witaj w Novel Reader</h1>
      <p>Twoja ulubiona aplikacja do czytania powieści online!</p>
      <nav>
        <ul>
          {isAuthenticated ? (
            <li>Zalogowany</li>
          ) : (
            <li>
              <Link to="/signin">Zaloguj się</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
