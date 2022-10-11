import "./../App.css";
import React, { useState } from "react";
import { Greeting } from "./Greeting";
import { GameFieldMinus } from "./GameFieldMinus";
import { GameFieldMultiply } from "./GameFieldMultiply";
import { GameFieldPlus } from "./GameFieldPlus";

export function GameLayout() {
  const [game, setGame] = useState("");

  function GameFieldReturn() {
    return game === "PLUS" ? (
      <GameFieldPlus />
    ) : game === "MINUS" ? (
      <GameFieldMinus />
    ) : (
      <GameFieldMultiply />
    );
  }

  function GameSelector() {
    function onSubmitMinus() {
      setGame("MINUS");
    }

    function onSubmitMultiply() {
      setGame("MULTIPLY");
    }

    function onSubmitPlus() {
      setGame("PLUS");
    }

    function SelectGameMinus() {
      return (
        <>
          <button id="select-game-minus-button" onClick={onSubmitMinus}>
            - Subtraction
          </button>
        </>
      );
    }

    function SelectGameMultiply() {
      return (
        <>
          <button id="select-game-multiply-button" onClick={onSubmitMultiply}>
            X Multiplication
          </button>
        </>
      );
    }

    function SelectGamePlus() {
      return (
        <>
          <button id="select-game-plus-button" onClick={onSubmitPlus}>
            + (Addition)
          </button>
        </>
      );
    }

    return (
      <>
        <Greeting />
        <SelectGamePlus />
        <SelectGameMinus />
        <SelectGameMultiply />
      </>
    );
  }

  if (game === "") {
    return <GameSelector />;
  }

  return <GameFieldReturn />;
}
