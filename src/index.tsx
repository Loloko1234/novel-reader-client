import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx"; // This should now work

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);