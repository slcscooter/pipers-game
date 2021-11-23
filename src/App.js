import { FarkleGameBoard } from "./game/Farkle";

function App() {
  return (
    <div id="App" class="text-center">
      <header
        id="App-header"
        class="bg-white min-h-screen flex flex-col items-center justify-center text-black"
      >
        <FarkleGameBoard />
      </header>
    </div>
  );
}

export default App;
