import { FrackleGameBoard } from "./game/Frackle";
import { app } from "./game/game.css";

function App() {
  return (
    <div id="app" class="text-center">
      <header id="app-header" class={app}>
        <FrackleGameBoard />
      </header>
    </div>
  );
}

export default App;
