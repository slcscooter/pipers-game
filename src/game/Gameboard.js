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
    setHeldDice2(false);
    setDiceValue2("Roll");
    setRolled2(false);
    setImageSource2(rollImage);
    setAltSource2("Dice 2 value is Roll");
    setDiceScore2(0);
  }

  /**
   * Dice Actions
   */

  // Dice 1
  const [heldDice1, setHeldDice1] = useState(false);
  const [diceValue1, setDiceValue1] = useState("Roll");
  const [rolled1, setRolled1] = useState(false);
  const [imageSource1, setImageSource1] = useState(rollImage1);
  const [altSource1, setAltSource1] = useState("Dice 1 value is Roll");
  const [diceScore1, setDiceScore1] = useState(diceValue1);

  function handleHoldDice1() {
    setHeldDice1(true);
  }

  function handleUnHoldDice1() {
    setHeldDice1(false);
  }

  function handleRoll1() {
    function getRandomInt(max1) {
      return Math.floor(Math.random() * max1);
    }
    const roll1 = getRandomInt(6) + 1;

    function srcGen(roll1) {
      if (roll1 === "Roll") {
        return rollImage;
      } else if (roll1 === 6) {
        return rollImage6;
      } else if (roll1 === 5) {
        return rollImage5;
      } else if (roll1 === 4) {
        return rollImage4;
      } else if (roll1 === 3) {
        return rollImage3;
      } else if (roll1 === 2) {
        return rollImage2;
      } else if (roll1 === 1) {
        return rollImage1;
      }
    }
    const src1 = srcGen(roll1);

    setDiceValue1(roll1);
    setRolled1(true);
    setAltSource1(`Dice 1 value is ${roll1}`);
    setImageSource1(src1);
  }

  // Dice 2
  const [heldDice2, setHeldDice2] = useState(false);
  const [diceValue2, setDiceValue2] = useState("Roll");
  const [rolled2, setRolled2] = useState(false);
  const [imageSource2, setImageSource2] = useState(rollImage1);
  const [altSource2, setAltSource2] = useState("Dice 2 value is Roll");
  const [diceScore2, setDiceScore2] = useState(diceValue2);

  function handleHoldDice2() {
    setHeldDice2(true);
  }

  function handleUnHoldDice2() {
    setHeldDice2(false);
  }

  function handleRoll2() {
    function getRandomInt(max2) {
      return Math.floor(Math.random() * max2);
    }
    const roll2 = getRandomInt(6) + 1;

    function srcGen(roll) {
      if (roll2 === "Roll") {
        return rollImage;
      } else if (roll2 === 6) {
        return rollImage6;
      } else if (roll2 === 5) {
        return rollImage5;
      } else if (roll2 === 4) {
        return rollImage4;
      } else if (roll2 === 3) {
        return rollImage3;
      } else if (roll2 === 2) {
        return rollImage2;
      } else if (roll2 === 1) {
        return rollImage1;
      }
    }
    const src2 = srcGen(roll2);

    setDiceValue2(roll2);
    setRolled2(true);
    setAltSource2(`Dice 2 value is ${roll2}`);
    setImageSource2(src2);
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
    setRolled2(false);
    setHeldDice2(false);
    setDiceValue2("Roll");
    setImageSource2(rollImage);
    setAltSource2("Dice 2 value is Roll");
    setDiceScore2(0);
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
    setRolled2(false);
    setHeldDice2(false);
    setDiceValue2("Roll");
    setImageSource2(rollImage);
    setAltSource2("Dice value is Roll");
    setDiceScore2(0);
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
              onClick={
                heldDice1 === false ? handleHoldDice1 : handleUnHoldDice1
              }
              hidden={diceValue1 === "Roll"}
              disabled={lockDice === true}
            >
              {heldDice1 === false ? "Hold" : "Unhold"}
            </button>
            <button
              className="dice-action btn btn-outline"
              onClick={handleRoll1}
              disabled={heldDice1 || rolled1}
            >
              Roll
            </button>
          </div>
          <div id="dice-2" className="dice">
            <img className="dice-image" src={imageSource2} alt={altSource2} />
          </div>
          <div className="dice-actions">
            <button
              className="dice-action btn btn-outline"
              onClick={
                heldDice2 === false ? handleHoldDice2 : handleUnHoldDice2
              }
              hidden={diceValue2 === "Roll"}
              disabled={lockDice === true}
            >
              {heldDice2 === false ? "Hold" : "Unhold"}
            </button>
            <button
              className="dice-action btn btn-outline"
              onClick={handleRoll2}
              disabled={heldDice2 || rolled2}
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
