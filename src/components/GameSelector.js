import "./../App.css";
import React from "react";

export function GameSelector(handleOnSubmitMinus, handleOnSubmitMultiply, handleOnSubmitPlus) {
  function SelectGameForm(props) {
    return (
      <>
        <form id={`select-game-form-${props.value}`} onSubmit={props.handleOnSubmit}>
          <input id={`select-game-form-submit-${props.value}`} type="submit" value={props.value} />
        </form>
      </>
    );
  }

  return (
    <>
      <SelectGameForm value="+" handleOnSubmit={handleOnSubmitPlus} />
      <SelectGameForm value="-" handleOnSubmit={handleOnSubmitMinus} />
      <SelectGameForm value="X" handleOnSubmit={handleOnSubmitMultiply} />
    </>
  );
}
