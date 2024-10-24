import React from "react";
import "./styles/app.css";
import NovelLibrary from "./components/NovelLibrary.tsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NovelLibrary />
      </header>
    </div>
  );
}

export default App;
