import { useState } from "react";
import { Gameboard1v1 } from "./game/1v1";
import { buttonStyle } from "./game/game.css";
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
    <div id="App" class="text-center">
      <header
        id="App-header"
        class="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white"
      >
        <button
          id="game-selector"
          class={buttonStyle}
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
