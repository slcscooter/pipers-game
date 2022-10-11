import React, { useState } from "react";

export function TopNav() {
  const [showInstructions, setShowInstructions] = useState(false);

  if (showInstructions) {
    return (
      <>
        <div>
          <button
            id="dismiss-instructions-button"
            onClick={() => {
              setShowInstructions(false);
            }}
          >
            Dismiss Instructions
          </button>
          <p>How to play the game: TODO</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <button
          id="show-instructions-button"
          onClick={() => {
            setShowInstructions(true);
          }}
        >
          Show Instructions
        </button>
        <button
          id="reset-game-button"
          onClick={() => {
            document.location.reload(true);
          }}
        >
          Reset Game
        </button>
      </div>
    </>
  );
}
