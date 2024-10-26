import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./styles/app.css";
import NovelLibrary from "./components/NovelLibrary.tsx";
import SignIn from "./api/auth/signin.tsx";
import Home from "./components/Home.tsx";

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({
  element,
}) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? element : <Navigate to="/signin" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
          <Route
            path="/library"
            element={<PrivateRoute element={<NovelLibrary />} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
