import "./../App.css";
import React, { useState } from "react";
import greenLogo from "./../assets/greenLogo.svg";
import logo from "./../assets/logo.svg";
import redLogo from "./../assets/redLogo.svg";
import { randomInt } from "../utilities/randomInteger";

export function GameField() {
  const [question, setQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [bottomValue, setBottomValue] = useState(randomInt());
  const [topValue, setTopValue] = useState(randomInt());
  const [userInput, setUserInput] = useState(null);
  const [image, setImage] = useState(logo);
  const [answer, setAnswer] = useState(topValue + bottomValue);

  function handleCorrectAnswer() {
    setQuestion(question + 1);
    setScore(score + 1);
    setTopValue(randomInt());
    setBottomValue(randomInt());
    setImage(greenLogo);
    setUserInput((document.getElementById("user-input").value = ""));
  }

  function handleIncorrectAnswer() {
    setQuestion(question + 1);
    setTopValue(randomInt());
    setBottomValue(randomInt());
    setImage(redLogo);
    setUserInput((document.getElementById("user-input").value = ""));
  }

  function handleChange(event) {
    setAnswer(topValue + bottomValue);
    setUserInput(event.target.value);
  }

  function ReactLogo() {
    return (
      <>
        <img src={image} className="App-logo" alt="logo" />
      </>
    );
  }

  function ProgressBar() {
    return (
      <>
        <p>Question: {question}</p>
        <p>Score: {score}</p>
      </>
    );
  }

  function QuestionCard() {
    return (
      <>
        <p>{topValue}</p>
        <p>+</p>
        <p>{bottomValue}</p>
        <p>=</p>
      </>
    );
  }

  function UserInput() {
    return (
      <>
        <input
          type="text"
          id="user-input"
          name="user-input"
          onChange={handleChange}
        />
      </>
    );
  }

  function AnswerPrompt() {
    const logoState =
      question === 1 ? <p>Good luck!</p> : <p>You've got this!</p>;
    const greenLogoState = image === greenLogo ? <p>Great job!</p> : logoState;
    const redLogoState = <p>Incorrect answer, keep trying!</p>;

    const answerPrompt = image === redLogo ? redLogoState : greenLogoState;

    return <>{answerPrompt}</>;
  }

  function SubmitButton() {
    return (
      <>
        <button
          onClick={
            answer.toString() === userInput
              ? handleCorrectAnswer
              : handleIncorrectAnswer
          }
        >
          Submit Answer
        </button>
      </>
    );
  }

  return (
    <>
      <ReactLogo />
      <ProgressBar />
      <QuestionCard />
      <UserInput />
      <AnswerPrompt />
      <SubmitButton />
    </>
  );
}
