import "./App.css";
import React from "react";
import { GameField } from "./components/GameField";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameField />
      </header>
    </div>
  );
}

export default App;
