import React from "react";
import { useNavigate, Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userId");
    setTimeout(() => {
      window.location.reload();
    }, 100); // 100ms delay before refreshing
    navigate("/");
  };
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/library">Biblioteka</Link>
              </li>
            )}
          </ul>
        </nav>
        {isAuthenticated && <button onClick={handleLogout}>Wyloguj się</button>}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
