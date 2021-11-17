import React from "react";
import { useState } from "react";
import {
  rollImage,
  rollImage1,
  rollImage2,
  rollImage3,
  rollImage4,
  rollImage5,
  rollImage6,
} from "./refs/imageRefs";

export function Gameboard() {
  /**
   * Game Level Actions
   */

  function handleResetGame() {
    setHeldDice1(false);
    setDiceValue1("Roll");
    setRolled1(false);
    setImageSource1(rollImage);
    setAltSource1("Dice 1 value is Roll");
    setPlayer("Player 1");
    setTurnCount(1);
    setLockDice(false);
    setNextRollLocked(true);
    setRollCount(1);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setDiceScore1(0);
    setTurnScore(0);
  }

  /**
   * Dice Actions
   */

  const [heldDice1, setHeldDice1] = useState(false);
  const [diceValue1, setDiceValue1] = useState("Roll");
  const [rolled1, setRolled1] = useState(false);
  const [imageSource1, setImageSource1] = useState(rollImage);
  const [altSource1, setAltSource1] = useState("Dice 1 value is Roll");
  const [diceScore1, setDiceScore1] = useState(diceValue1);

  function handleHoldDice() {
    setHeldDice1(true);
  }

  function handleUnHoldDice() {
    setHeldDice1(false);
  }

  function handleRoll() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    const roll = getRandomInt(6) + 1;

    function srcGen(roll) {
      if (roll === "Roll") {
        return rollImage;
      } else if (roll === 6) {
        return rollImage6;
      } else if (roll === 5) {
        return rollImage5;
      } else if (roll === 4) {
        return rollImage4;
      } else if (roll === 3) {
        return rollImage3;
      } else if (roll === 2) {
        return rollImage2;
      } else if (roll === 1) {
        return rollImage1;
      }
    }
    const src = srcGen(roll);

    setDiceValue1(roll);
    setRolled1(true);
    setAltSource1(`Dice 1 value is ${roll}`);
    setImageSource1(src);
  }

  /**
   * Turn Actions
   */

  const [player, setPlayer] = useState("Player 1");
  const [turnCount, setTurnCount] = useState(1);
  const [lockDice, setLockDice] = useState(false);
  const [nextRollLocked, setNextRollLocked] = useState(true);
  const [rollCount, setRollCount] = useState(1);
  const [turnScore, setTurnScore] = useState(0);

  function handleLockDice() {
    if (rollCount === 3) {
      setLockDice(true);
    } else {
      setLockDice(true);
      setNextRollLocked(false);
    }
  }

  function handleUnlockDice() {
    setLockDice(false);
    setNextRollLocked(true);
  }

  function handleNextRoll() {
    setLockDice(false);
    setNextRollLocked(true);
    setRollCount(rollCount + 1);
    setRolled1(false);
    setHeldDice1(false);
    setDiceValue1("Roll");
    setImageSource1(rollImage);
    setAltSource1("Dice 1 value is Roll");
    setDiceScore1(0);
  }

  function handleEndTurn() {
    if (player === "Player 1") {
      setPlayer("Player 2");
      setPlayer1Score(player1Score + turnScore);
    }

    if (player === "Player 2") {
      setPlayer("Player 1");
      setPlayer2Score(player2Score + turnScore);
      setTurnCount(turnCount + 1);
    }

    setLockDice(false);
    setNextRollLocked(true);
    setRollCount(1);
    setRolled1(false);
    setHeldDice1(false);
    setDiceValue1("Roll");
    setImageSource1(rollImage);
    setAltSource1("Dice value is Roll");
    setDiceScore1(0);
    setTurnScore(0);
  }

  /**
   * Game Score
   */

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  return (
    <div className="game">
      <div className="game-level-controls">
        <button
          className="game-action btn btn-outline"
          onClick={handleResetGame}
        >
          Reset Game
        </button>
      </div>
      <div className="gameboard-container">
        <div className="dice-container">
          <div id="dice-1" className="dice">
            <img className="dice-image" src={imageSource1} alt={altSource1} />
          </div>
          <div className="dice-actions">
            <button
              className="dice-action btn btn-outline"
              onClick={heldDice1 === false ? handleHoldDice : handleUnHoldDice}
              hidden={diceValue1 === "Roll"}
              disabled={lockDice === true}
            >
              {heldDice1 === false ? "Hold" : "Unhold"}
            </button>
            <button
              className="dice-action btn btn-outline"
              onClick={handleRoll}
              disabled={heldDice1 || rolled1}
            >
              Roll
            </button>
          </div>
        </div>
        <div className="turn-actions-container">
          <p className="roll-count-text">Roll Count: {rollCount}</p>
          <p className="player=turn-text">
            Player: {player}, Turn: {turnCount}
          </p>
          <button
            className="turn-action btn btn-outline"
            onClick={lockDice === false ? handleLockDice : handleUnlockDice}
            disabled={heldDice1 === false}
          >
            {lockDice === false ? "Lock Dice" : "Unlock Dice"}
          </button>
          <button
            className="turn-action btn btn-outline"
            disabled={nextRollLocked}
            onClick={handleNextRoll}
          >
            Next Roll
          </button>
          <button
            className="turn-action btn btn-outline"
            onClick={handleEndTurn}
            disabled={lockDice === false}
          >
            End Turn
          </button>
        </div>
        <div className="game-scores-container">
          <p className="game-score-text">Player 1 Score: {player1Score}</p>
          <p className="game-score-text">Player 2 Score: {player2Score}</p>
        </div>
        Gameboard container
      </div>
    </div>
  );
}
