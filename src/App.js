import { useState } from "react";
import "./App.css";
import { Gameboard1v1 } from "./game/1v1";
import { GameboardSolo } from "./game/Solo";

function App() {
  const [selectGame, setSelectGame] = useState("Solo");

  function handleSelect1v1() {
    setSelectGame("1v1");
  }

  function handleSelectSolo() {
    setSelectGame("Solo");
  }

  function Game() {
    if (selectGame === "1v1") {
      return <Gameboard1v1 />;
    } else return <GameboardSolo />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <button
          id="game-selector"
          class="bg-white text-black text-xs rounded-md"
          onClick={selectGame === "Solo" ? handleSelect1v1 : handleSelectSolo}
        >
          {selectGame === "Solo" ? "Change game to 1v1" : "Change game to Solo"}
        </button>
        <Game></Game>
      </header>
    </div>
  );
}

export default App;
