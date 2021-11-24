import { FarkleGameBoard } from "./game/Farkle";
import { app } from "./game/game.css";

function App() {
  return (
    <div id="app" class="text-center">
      <header id="app-header" class={app}>
        <FarkleGameBoard />
      </header>
    </div>
  );
}

export default App;
