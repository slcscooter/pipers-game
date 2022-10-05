import "./../App.css";
import React, { useState } from "react";
import greenLogo from "./../assets/greenLogo.svg";
import logo from "./../assets/logo.svg";
import redLogo from "./../assets/redLogo.svg";
import { randomInt } from "../utilities/randomInteger";

export function GameField() {
  const [playingGame, setPlayingGame] = useState(true);

  // NewGame Functions

  // PlayingGame Functions
  const [question, setQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [bottomValue, setBottomValue] = useState(randomInt());
  const [topValue, setTopValue] = useState(randomInt());
  const [userInput, setUserInput] = useState("");
  const [image, setImage] = useState(logo);
  const [answer, setAnswer] = useState(topValue + bottomValue);

  const logoState =
    question === 1 ? <p>Good luck!</p> : <p>You've got this!</p>;
  const greenLogoState = image === greenLogo ? <p>Great job!</p> : logoState;
  const redLogoState = <p>Incorrect answer, keep trying!</p>;

  const answerPrompt = image === redLogo ? redLogoState : greenLogoState;

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
        <p>
          {topValue} + {bottomValue}
        </p>
      </>
    );
  }

  function handleGameOverCorrectAnswer() {
    setScore(score + 1);
    setPlayingGame(false);
  }

  function handleGameOverIncorrectAnswer() {
    setPlayingGame(false);
  }

  class SubmitAnswerForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: userInput };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      setAnswer(topValue + bottomValue);
      this.setState({ value: event.target.value });
    }

    render() {
      return (
        <>
          <form
            onSubmit={
              answer >= 99
                ? answer.toString() === this.state.value
                  ? handleCorrectAnswer
                  : handleIncorrectAnswer
                : answer.toString() === this.state.value
                ? handleGameOverCorrectAnswer
                : handleGameOverIncorrectAnswer
            }
          >
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit Answer" />
          </form>
          {answerPrompt}
        </>
      );
    }
  }

  function PlayingGame() {
    return (
      <>
        <ReactLogo />
        <ProgressBar />
        <QuestionCard />
        <SubmitAnswerForm />
      </>
    );
  }

  // GameOver Functions
  function handleStartNewGame() {
    setQuestion(1);
    setScore(0);
    setBottomValue(randomInt());
    setTopValue(randomInt());
    setUserInput("");
    setImage(logo);
    setAnswer(topValue + bottomValue);
  }

  function GameOver() {
    return (
      <>
        <p>Congratulations you did great!</p>
        <p>Score: {score}</p>
        <form onSubmit={handleStartNewGame}>
          <input type="submit" value="Start New Game" />
        </form>
      </>
    );
  }

  if (playingGame) {
    return (
      <>
        <PlayingGame />
      </>
    );
  }

  return (
    <>
      <GameOver />
    </>
  );
}
