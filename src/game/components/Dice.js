export function Dice(props) {
  return (
    <div id={`dice-${props.diceNumber}`} class={props.flexCol}>
      <img
        id={`dice-image--${props.diceNumber}`}
        class={props.diceImage}
        src={props.imageSource}
        alt={props.altSource}
      />
      <div
        id={`dice-actions-container-${props.diceNumber}`}
        class={props.flexRow}
      >
        <button
          id={`dice-hold-button-${props.diceNumber}`}
          class={
            props.lockDice === true || props.rollCount > props.heldDiceRoll
              ? props.textDisabled
              : props.text
          }
          onClick={
            props.heldDice === false
              ? props.handleHoldDice
              : props.handleUnHoldDice
          }
          hidden={props.diceValue === "Roll"}
          disabled={
            props.lockDice === true ||
            props.rollCount > props.heldDiceRoll ||
            props.pauseGame
          }
        >
          {props.heldDice === false ? "Hold" : "Unhold"}
        </button>
      </div>
    </div>
  );
}
