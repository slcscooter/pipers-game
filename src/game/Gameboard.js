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
    setHeldDiceRoll1(undefined);
    setHeldDice2(false);
    setDiceValue2("Roll");
    setRolled2(false);
    setImageSource2(rollImage);
    setAltSource2("Dice 2 value is Roll");
    setDiceScore2(0);
    setHeldDiceRoll2(undefined);
    setHeldDice3(false);
    setDiceValue3("Roll");
    setRolled3(false);
    setImageSource3(rollImage);
    setAltSource3("Dice 3 value is Roll");
    setDiceScore3(0);
    setHeldDiceRoll3(undefined);
    setHeldDice4(false);
    setDiceValue4("Roll");
    setRolled4(false);
    setImageSource4(rollImage);
    setAltSource4("Dice 4 value is Roll");
    setDiceScore4(0);
    setHeldDiceRoll4(undefined);
    setHeldDice5(false);
    setDiceValue5("Roll");
    setRolled5(false);
    setImageSource5(rollImage);
    setAltSource5("Dice 5 value is Roll");
    setDiceScore5(0);
    setHeldDiceRoll5(undefined);
    setHeldDice6(false);
    setDiceValue6("Roll");
    setRolled6(false);
    setImageSource6(rollImage);
    setAltSource6("Dice 6 value is Roll");
    setDiceScore6(0);
    setHeldDiceRoll6(undefined);
  }

  /**
   * Dice Actions
   */

  // Dice 1
  const [heldDice1, setHeldDice1] = useState(false);
  const [diceValue1, setDiceValue1] = useState("Roll");
  const [rolled1, setRolled1] = useState(false);
  const [imageSource1, setImageSource1] = useState(rollImage);
  const [altSource1, setAltSource1] = useState("Dice 1 value is Roll");
  const [diceScore1, setDiceScore1] = useState(diceValue1);
  const [heldDiceRoll1, setHeldDiceRoll1] = useState(undefined);

  function handleHoldDice1() {
    setHeldDice1(true);
    setHeldDiceRoll1(rollCount);
  }

  function handleUnHoldDice1() {
    setHeldDice1(false);
    setHeldDiceRoll1(undefined);
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
    setDiceScore1(roll1);
    setRolled1(true);
    setAltSource1(`Dice 1 value is ${roll1}`);
    setImageSource1(src1);
  }

  // Dice 2
  const [heldDice2, setHeldDice2] = useState(false);
  const [diceValue2, setDiceValue2] = useState("Roll");
  const [rolled2, setRolled2] = useState(false);
  const [imageSource2, setImageSource2] = useState(rollImage);
  const [altSource2, setAltSource2] = useState("Dice 2 value is Roll");
  const [diceScore2, setDiceScore2] = useState(diceValue2);
  const [heldDiceRoll2, setHeldDiceRoll2] = useState(undefined);

  function handleHoldDice2() {
    setHeldDice2(true);
    setHeldDiceRoll2(rollCount);
  }

  function handleUnHoldDice2() {
    setHeldDice2(false);
    setHeldDiceRoll2(undefined);
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
    setDiceScore2(roll2);
    setRolled2(true);
    setAltSource2(`Dice 2 value is ${roll2}`);
    setImageSource2(src2);
  }

  // Dice 3
  const [heldDice3, setHeldDice3] = useState(false);
  const [diceValue3, setDiceValue3] = useState("Roll");
  const [rolled3, setRolled3] = useState(false);
  const [imageSource3, setImageSource3] = useState(rollImage);
  const [altSource3, setAltSource3] = useState("Dice 3 value is Roll");
  const [diceScore3, setDiceScore3] = useState(diceValue3);
  const [heldDiceRoll3, setHeldDiceRoll3] = useState(undefined);

  function handleHoldDice3() {
    setHeldDice3(true);
    setHeldDiceRoll3(rollCount);
  }

  function handleUnHoldDice3() {
    setHeldDice3(false);
    setHeldDiceRoll3(undefined);
  }

  function handleRoll3() {
    function getRandomInt(max3) {
      return Math.floor(Math.random() * max3);
    }
    const roll3 = getRandomInt(6) + 1;

    function srcGen(roll3) {
      if (roll3 === "Roll") {
        return rollImage;
      } else if (roll3 === 6) {
        return rollImage6;
      } else if (roll3 === 5) {
        return rollImage5;
      } else if (roll3 === 4) {
        return rollImage4;
      } else if (roll3 === 3) {
        return rollImage3;
      } else if (roll3 === 2) {
        return rollImage3;
      } else if (roll3 === 1) {
        return rollImage1;
      }
    }
    const src3 = srcGen(roll3);

    setDiceValue3(roll3);
    setDiceScore3(roll3);
    setRolled3(true);
    setAltSource3(`Dice 3 value is ${roll3}`);
    setImageSource3(src3);
  }

  // Dice 4
  const [heldDice4, setHeldDice4] = useState(false);
  const [diceValue4, setDiceValue4] = useState("Roll");
  const [rolled4, setRolled4] = useState(false);
  const [imageSource4, setImageSource4] = useState(rollImage);
  const [altSource4, setAltSource4] = useState("Dice 4 value is Roll");
  const [diceScore4, setDiceScore4] = useState(diceValue4);
  const [heldDiceRoll4, setHeldDiceRoll4] = useState(undefined);

  function handleHoldDice4() {
    setHeldDice4(true);
    setHeldDiceRoll4(rollCount);
  }

  function handleUnHoldDice4() {
    setHeldDice4(false);
    setHeldDiceRoll4(undefined);
  }

  function handleRoll4() {
    function getRandomInt(max4) {
      return Math.floor(Math.random() * max4);
    }
    const roll4 = getRandomInt(6) + 1;

    function srcGen(roll4) {
      if (roll4 === "Roll") {
        return rollImage;
      } else if (roll4 === 6) {
        return rollImage6;
      } else if (roll4 === 5) {
        return rollImage5;
      } else if (roll4 === 4) {
        return rollImage4;
      } else if (roll4 === 3) {
        return rollImage3;
      } else if (roll4 === 2) {
        return rollImage2;
      } else if (roll4 === 1) {
        return rollImage1;
      }
    }
    const src4 = srcGen(roll4);

    setDiceValue4(roll4);
    setDiceScore4(roll4);
    setRolled4(true);
    setAltSource4(`Dice 4 value is ${roll4}`);
    setImageSource4(src4);
  }

  // Dice 5
  const [heldDice5, setHeldDice5] = useState(false);
  const [diceValue5, setDiceValue5] = useState("Roll");
  const [rolled5, setRolled5] = useState(false);
  const [imageSource5, setImageSource5] = useState(rollImage);
  const [altSource5, setAltSource5] = useState("Dice 5 value is Roll");
  const [diceScore5, setDiceScore5] = useState(diceValue5);
  const [heldDiceRoll5, setHeldDiceRoll5] = useState(undefined);

  function handleHoldDice5() {
    setHeldDice5(true);
    setHeldDiceRoll5(rollCount);
  }

  function handleUnHoldDice5() {
    setHeldDice5(false);
    setHeldDiceRoll5(undefined);
  }

  function handleRoll5() {
    function getRandomInt(max5) {
      return Math.floor(Math.random() * max5);
    }
    const roll5 = getRandomInt(6) + 1;

    function srcGen(roll5) {
      if (roll5 === "Roll") {
        return rollImage;
      } else if (roll5 === 6) {
        return rollImage6;
      } else if (roll5 === 5) {
        return rollImage5;
      } else if (roll5 === 4) {
        return rollImage4;
      } else if (roll5 === 3) {
        return rollImage3;
      } else if (roll5 === 2) {
        return rollImage2;
      } else if (roll5 === 1) {
        return rollImage1;
      }
    }
    const src5 = srcGen(roll5);

    setDiceValue5(roll5);
    setDiceScore5(roll5);
    setRolled5(true);
    setAltSource5(`Dice 5 value is ${roll5}`);
    setImageSource5(src5);
  }

  // Dice 6
  const [heldDice6, setHeldDice6] = useState(false);
  const [diceValue6, setDiceValue6] = useState("Roll");
  const [rolled6, setRolled6] = useState(false);
  const [imageSource6, setImageSource6] = useState(rollImage);
  const [altSource6, setAltSource6] = useState("Dice 6 value is Roll");
  const [diceScore6, setDiceScore6] = useState(diceValue6);
  const [heldDiceRoll6, setHeldDiceRoll6] = useState(undefined);

  function handleHoldDice6() {
    setHeldDice6(true);
    setHeldDiceRoll6(rollCount);
  }

  function handleUnHoldDice6() {
    setHeldDice6(false);
    setHeldDiceRoll6(rollCount);
  }

  function handleRoll6() {
    function getRandomInt(max6) {
      return Math.floor(Math.random() * max6);
    }
    const roll6 = getRandomInt(6) + 1;

    function srcGen(roll6) {
      if (roll6 === "Roll") {
        return rollImage;
      } else if (roll6 === 6) {
        return rollImage6;
      } else if (roll6 === 5) {
        return rollImage5;
      } else if (roll6 === 4) {
        return rollImage4;
      } else if (roll6 === 3) {
        return rollImage3;
      } else if (roll6 === 2) {
        return rollImage3;
      } else if (roll6 === 1) {
        return rollImage1;
      }
    }
    const src6 = srcGen(roll6);

    setDiceValue6(roll6);
    setDiceScore6(roll6);
    setRolled6(true);
    setAltSource6(`Dice 6 value is ${roll6}`);
    setImageSource6(src6);
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
    setLockDice(true);
    setNextRollLocked(false);
  }

  function handleUnlockDice() {
    setLockDice(false);
    setNextRollLocked(true);
  }

  function handleNextRoll() {
    setLockDice(false);
    setNextRollLocked(true);
    setRollCount(rollCount + 1);

    if (!heldDice1) {
      setRolled1(false);
      setDiceValue1("Roll");
      setImageSource1(rollImage);
      setAltSource1("Dice 1 value is Roll");
      setDiceScore1(0);
    }

    if (!heldDice2) {
      setRolled2(false);
      setDiceValue2("Roll");
      setImageSource2(rollImage);
      setAltSource2("Dice 2 value is Roll");
      setDiceScore2(0);
    }

    if (!heldDice3) {
      setRolled3(false);
      setDiceValue3("Roll");
      setImageSource3(rollImage);
      setAltSource3("Dice 3 value is Roll");
      setDiceScore3(0);
    }

    if (!heldDice4) {
      setRolled4(false);
      setDiceValue4("Roll");
      setImageSource4(rollImage);
      setAltSource4("Dice 4 value is Roll");
      setDiceScore4(0);
    }

    if (!heldDice5) {
      setRolled5(false);
      setDiceValue5("Roll");
      setImageSource5(rollImage);
      setAltSource5("Dice 5 value is Roll");
      setDiceScore5(0);
    }

    if (!heldDice6) {
      setRolled6(false);
      setDiceValue6("Roll");
      setImageSource6(rollImage);
      setAltSource6("Dice 6 value is Roll");
      setDiceScore6(0);
    }
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
    setHeldDiceRoll1(undefined);
    setImageSource1(rollImage);
    setAltSource1("Dice 1 value is Roll");
    setDiceScore1(0);
    setRolled2(false);
    setHeldDice2(false);
    setDiceValue2("Roll");
    setHeldDiceRoll2(undefined);
    setImageSource2(rollImage);
    setAltSource2("Dice 2 value is Roll");
    setDiceScore2(0);
    setRolled3(false);
    setHeldDice3(false);
    setDiceValue3("Roll");
    setHeldDiceRoll3(undefined);
    setImageSource3(rollImage);
    setAltSource3("Dice 3 value is Roll");
    setDiceScore3(0);
    setRolled4(false);
    setHeldDice4(false);
    setDiceValue4("Roll");
    setHeldDiceRoll4(undefined);
    setImageSource4(rollImage);
    setAltSource4("Dice 4 value is Roll");
    setDiceScore4(0);
    setRolled5(false);
    setHeldDice5(false);
    setDiceValue5("Roll");
    setHeldDiceRoll5(undefined);
    setImageSource5(rollImage);
    setAltSource5("Dice 5 value is Roll");
    setDiceScore5(0);
    setRolled6(false);
    setHeldDice6(false);
    setDiceValue6("Roll");
    setHeldDiceRoll6(undefined);
    setImageSource6(rollImage);
    setAltSource6("Dice 6 value is Roll");
    setDiceScore6(0);
    setTurnScore(0);
  }

  function RollList() {
    const dice1 = heldDice1 === true ? `D1: ${diceScore1} ` : undefined;
    const dice2 = heldDice2 === true ? `D2: ${diceScore2} ` : undefined;
    const dice3 = heldDice3 === true ? `D3: ${diceScore3} ` : undefined;
    const dice4 = heldDice4 === true ? `D4: ${diceScore4} ` : undefined;
    const dice5 = heldDice5 === true ? `D5: ${diceScore5} ` : undefined;
    const dice6 = heldDice6 === true ? `D6: ${diceScore6}` : undefined;

    const bankedDiceList = [];

    if (dice1 !== undefined) {
      bankedDiceList.push(dice1);
    }
    if (dice2 !== undefined) {
      bankedDiceList.push(dice2);
    }
    if (dice3 !== undefined) {
      bankedDiceList.push(dice3);
    }
    if (dice4 !== undefined) {
      bankedDiceList.push(dice4);
    }
    if (dice5 !== undefined) {
      bankedDiceList.push(dice5);
    }
    if (dice6 !== undefined) {
      bankedDiceList.push(dice6);
    }

    return (
      <>
        <p>Banked: {bankedDiceList}</p>
      </>
    );
  }

  /**
   * Game Score
   */

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  return (
    <div id="game" class="flex space-y-4 flex-col">
      <div className="game-level-controls">
        <button
          id="reset-game-button"
          class="bg-white text-black text-xs rounded-md"
          onClick={handleResetGame}
        >
          Reset Game
        </button>
      </div>
      <div id="gameboard-container" class="flex space-y-4 flex-col">
        <div id="dice-container-1" class="flex space-x-4 flex-row">
          <div id="dice-1" class="flex space-y-4 flex-col">
            <img className="dice-image" src={imageSource1} alt={altSource1} />
            <div
              className="dice-actions-container-1"
              class="flex space-x-4 flex-row"
            >
              <button
                id="dice-1-hold-button"
                class={
                  lockDice === true || rollCount > heldDiceRoll1
                    ? "bg-white text-black text-md rounded-md opacity-50"
                    : "bg-white text-black text-md rounded-md"
                }
                onClick={
                  heldDice1 === false ? handleHoldDice1 : handleUnHoldDice1
                }
                hidden={diceValue1 === "Roll"}
                disabled={lockDice === true || rollCount > heldDiceRoll1}
              >
                {heldDice1 === false ? "Hold" : "Unhold"}
              </button>
              <button
                id="dice-1-roll-button"
                class={
                  rolled1
                    ? "bg-white text-black text-md rounded-md opacity-50"
                    : "bg-white text-black text-md rounded-md"
                }
                onClick={handleRoll1}
                disabled={rolled1}
                hidden={heldDice1 === true}
              >
                Roll
              </button>
            </div>
          </div>
          <div id="dice-2" class="flex space-y-4 flex-col">
            <img className="dice-image" src={imageSource2} alt={altSource2} />
            <div id="dice-actions-container-2" class="flex space-x-4 flex-row">
              <button
                id="dice-2-hold-button"
                class={
                  lockDice === true || rollCount > heldDiceRoll2
                    ? "bg-white text-black text-md rounded-md opacity-50"
                    : "bg-white text-black text-md rounded-md"
                }
                onClick={
                  heldDice2 === false ? handleHoldDice2 : handleUnHoldDice2
                }
                hidden={diceValue2 === "Roll"}
                disabled={lockDice === true || rollCount > heldDiceRoll2}
              >
                {heldDice2 === false ? "Hold" : "Unhold"}
              </button>
              <button
                id="dice-2-roll-button"
                class={
                  rolled2
                    ? "bg-white text-black text-md rounded-md opacity-50"
                    : "bg-white text-black text-md rounded-md"
                }
                onClick={handleRoll2}
                disabled={rolled2}
                hidden={heldDice2 === true}
              >
                Roll
              </button>
            </div>
          </div>
          <div id="dice-3" class="flex space-y-4 flex-col">
            <img className="dice-image" src={imageSource3} alt={altSource3} />
            <div id="dice-actions-container-3" class="flex space-x-4 flex-row">
              <button
                id="dice-3-hold-button"
                class={
                  lockDice === true || rollCount > heldDiceRoll3
                    ? "bg-white text-black text-md rounded-md opacity-50"
                    : "bg-white text-black text-md rounded-md"
                }
                onClick={
                  heldDice3 === false ? handleHoldDice3 : handleUnHoldDice3
                }
                hidden={diceValue3 === "Roll"}
                disabled={lockDice === true || rollCount > heldDiceRoll3}
              >
                {heldDice3 === false ? "Hold" : "Unhold"}
              </button>
              <button
                id="dice-3-roll-button"
                class={
                  rolled3
                    ? "bg-white text-black text-md rounded-md opacity-50"
                    : "bg-white text-black text-md rounded-md"
                }
                onClick={handleRoll3}
                disabled={rolled3}
                hidden={heldDice3 === true}
              >
                Roll
              </button>
            </div>
          </div>
        </div>
        <div id="dice-container-2" class="flex space-x-4 flex-row">
          <div id="dice-4" class="flex space-y-4 flex-col">
            <img className="dice-image" src={imageSource4} alt={altSource4} />
            <div id="dice-actions-container-4" class="flex space-x-4 flex-row">
              <button
                id="dice-4-hold-button"
                class={
                  lockDice === true || rollCount > heldDiceRoll4
                    ? "bg-white text-black text-md rounded-md opacity-50"
                    : "bg-white text-black text-md rounded-md"
                }
                onClick={
                  heldDice4 === false ? handleHoldDice4 : handleUnHoldDice4
                }
                hidden={diceValue4 === "Roll"}
                disabled={lockDice === true || rollCount > heldDiceRoll4}
              >
                {heldDice4 === false ? "Hold" : "Unhold"}
              </button>
              <button
                id="dice-4-roll-button"
                class={
                  rolled4
                    ? "bg-white text-black text-md rounded-md opacity-50"
                    : "bg-white text-black text-md rounded-md"
                }
                onClick={handleRoll4}
                disabled={rolled4}
                hidden={heldDice4 === true}
              >
                Roll
              </button>
            </div>
          </div>
          <div id="dice-5" class="flex space-y-4 flex-col">
            <img className="dice-image" src={imageSource5} alt={altSource5} />
            <div id="dice-actions-container-5" class="flex space-x-4 flex-row">
              <button
                id="dice-5-hold-button"
                class={
                  lockDice === true || rollCount > heldDiceRoll5
                    ? "bg-white text-black text-md rounded-md opacity-50"
                    : "bg-white text-black text-md rounded-md"
                }
                onClick={
                  heldDice5 === false ? handleHoldDice5 : handleUnHoldDice5
                }
                hidden={diceValue5 === "Roll"}
                disabled={lockDice === true || rollCount > heldDiceRoll5}
              >
                {heldDice5 === false ? "Hold" : "Unhold"}
              </button>
              <button
                id="dice-5-roll-button"
                class={
                  rolled5
                    ? "bg-white text-black text-md rounded-md opacity-50"
                    : "bg-white text-black text-md rounded-md"
                }
                onClick={handleRoll5}
                disabled={rolled5}
                hidden={heldDice5 === true}
              >
                Roll
              </button>
            </div>
          </div>
          <div id="dice-6" class="flex space-y-4 flex-col">
            <img className="dice-image" src={imageSource6} alt={altSource6} />
            <div id="dice-actions-container-6" class="flex space-x-4 flex-row">
              <button
                id="dice-6-hold-button"
                class={
                  lockDice === true || rollCount > heldDiceRoll6
                    ? "bg-white text-black text-md rounded-md opacity-50"
                    : "bg-white text-black text-md rounded-md"
                }
                onClick={
                  heldDice6 === false ? handleHoldDice6 : handleUnHoldDice6
                }
                hidden={diceValue6 === "Roll"}
                disabled={lockDice === true || rollCount > heldDiceRoll6}
              >
                {heldDice6 === false ? "Hold" : "Unhold"}
              </button>
              <button
                id="dice-6-roll-button"
                class={
                  rolled6
                    ? "bg-white text-black text-md rounded-md opacity-50"
                    : "bg-white text-black text-md rounded-md"
                }
                onClick={handleRoll6}
                disabled={rolled6}
                hidden={heldDice6 === true}
              >
                Roll
              </button>
            </div>
          </div>
        </div>
        <div className="turn-actions-container">
          <RollList />
          <p className="turn-player-roll-text">
            Turn: {turnCount}, Player: {player}, Roll: {rollCount}
          </p>
          <button
            id="lock-dice-button"
            class="bg-white text-black text-sm rounded-md"
            onClick={lockDice === false ? handleLockDice : handleUnlockDice}
            hidden={
              heldDice1 === true ||
              heldDice2 === true ||
              heldDice3 === true ||
              heldDice4 === true ||
              heldDice5 === true ||
              heldDice6 === true
                ? false
                : true
            }
          >
            {lockDice === false ? "Lock Dice" : "Unlock Dice"}
          </button>
          <button
            id="next-roll-button"
            class="bg-white text-black text-sm rounded-md"
            onClick={handleNextRoll}
            hidden={nextRollLocked}
          >
            Next Roll
          </button>
          <button
            id="end-turn-button"
            class={
              lockDice === false
                ? "bg-white text-black text-sm rounded-md opacity-50"
                : "bg-white text-black text-sm rounded-md"
            }
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
      </div>
    </div>
  );
}
