import "./App.css";
import React, { useState } from "react";
import { TopNav } from "./components/TopNav";
import { GameLayout } from "./components/GameLayout";

function App() {
  const [showAbout, setShowAbout] = useState(false);
  function BottomNav() {
    return (
      <>
        <div>
          {/* TODO: Make Button Styled Like Link*/}
          <button
            id="about-jennifers-game-button"
            onClick={() => {
              setShowAbout(true);
            }}
          >
            About Jennifer's Game
          </button>
          <a
            onClick={() => {
              alert("Redirecting to Piper's Vlogs");
            }}
            href="https://piperbvlogs.com/"
            target="_blank"
            rel="noopener noreferrer"
            id="link-to-pipers-vlogs"
          >
            Piper's Vlogs
          </a>
          <a
            onClick={() => {
              alert("Redirecting to ScooterTesting");
            }}
            href="https://www.scootertesting.com"
            target="_blank"
            rel="noopener noreferrer"
            id="link-to-scooter-testing"
          >
            ScooterTesting
          </a>
        </div>
      </>
    );
  }

  if (showAbout) {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <p>Todo: Add about Jennifer's game</p>
            <button
              id="about-jennifers-game-dismiss-button"
              onClick={() => {
                setShowAbout(false);
              }}
            >
              Dismiss About Game
            </button>
          </div>
        </header>
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <TopNav />
        <GameLayout />
        <BottomNav />
      </header>
    </div>
  );
}

export default App;
