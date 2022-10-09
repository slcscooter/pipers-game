import "./App.css";
import React, { useState } from "react";
import { GameField } from "./components/GameField";
import { GameSelector } from "./components/GameSelector";

function App() {
  const [game, setGame] = useState("CHOOSING_GAME");

  function handleOnSubmitMinus() {
    setGame("MINUS");
  }
  function handleOnSubmitMultiply() {
    setGame("MULTIPLY");
  }
  function handleOnSubmitPlus() {
    setGame("PLUS");
  }

  if (game !== "CHOOSING_GAME") {
    return (
      <div className="App">
        <header className="App-header">
          <GameField />
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <GameSelector
            handleOnSubmitMinus={handleOnSubmitMinus}
            handleOnSubmitMultiply={handleOnSubmitMultiply}
            handleOnSubmitPlus={handleOnSubmitPlus}
          />
        </header>
      </div>
    );
  }
}

export default App;
