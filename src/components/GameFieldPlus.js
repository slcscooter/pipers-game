import "./../App.css";
import React, { useState } from "react";
import greenLogo from "./../assets/green-thumb-up.svg";
import logo from "./../assets/logo.svg";
import redLogo from "./../assets/red-thumb-down.svg";
import { randomInt } from "../utilities/randomInteger";

export function GameFieldPlus() {
  const [playingGame, setPlayingGame] = useState(true);

  // PlayingGame Functions
  const [question, setQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [bottomValue, setBottomValue] = useState(randomInt());
  const [topValue, setTopValue] = useState(randomInt());
  const [userInput, setUserInput] = useState("");
  const [image, setImage] = useState(logo);
  const [answer, setAnswer] = useState(topValue + bottomValue);
  const [handleAnswer, setHandleAnswer] = useState(false);

  const logoState =
    question === 1 ? (
      <p id="logo-state-good-luck">Good luck!</p>
    ) : (
      <p id="logo-state-got-this">You've got this!</p>
    );
  const greenLogoState =
    image === greenLogo ? <p id="logo-state-great-job">Great job!</p> : logoState;
  const redLogoState = <p id="logo-state-incorrect-answer">Incorrect answer, keep trying!</p>;

  const answerPrompt = image === redLogo ? redLogoState : greenLogoState;

  function handleCorrectAnswer() {
    setHandleAnswer(true);
    setQuestion(question + 1);
    setScore(score + 1);
    setTopValue(randomInt());
    setBottomValue(randomInt());
    setImage(greenLogo);
  }

  function handleIncorrectAnswer() {
    setHandleAnswer(true);
    setQuestion(question + 1);
    setTopValue(randomInt());
    setBottomValue(randomInt());
    setImage(redLogo);
  }

  function ReactLogo() {
    return image === logo ? (
      <>
        <img id="react-logo" src={image} className="App-logo" alt="logo" />
      </>
    ) : (
      <>
        <img id="react-logo" src={image} className="App-logo-no-spin" alt="logo" />
      </>
    );
  }

  function ProgressBar() {
    return (
      <>
        <p id="progress-bar-question" value={question}>
          Question: {question}
        </p>
        <p id="progress-bar-score" value={score}>
          Score: {score}
        </p>
      </>
    );
  }

  function QuestionCard() {
    return (
      <>
        <form id="question-card">
          <p id="question-card-top-value" value={topValue}>
            {topValue}
          </p>
          <p id="question-card-operator-plus">+</p>
          <p id="question-card-bottom-value" value={bottomValue}>
            {bottomValue}
          </p>
        </form>
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
            id="submit-answer-form"
            onSubmit={
              question <= 99
                ? answer.toString() === this.state.value
                  ? handleCorrectAnswer
                  : handleIncorrectAnswer
                : answer.toString() === this.state.value
                ? handleGameOverCorrectAnswer
                : handleGameOverIncorrectAnswer
            }
          >
            <input
              id="submit-answer-form-input"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input id="submit-answer-form-submit-answer" type="submit" value="Submit Answer" />
          </form>
          {answerPrompt}
        </>
      );
    }
  }

  class HandleAnswerForm extends React.Component {
    constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
      setAnswer(topValue + bottomValue);
      setHandleAnswer(false);
    }

    render() {
      return (
        <>
          {answerPrompt}
          <form id="handle-answer-form" onSubmit={this.handleSubmit}>
            <input id="handle-answer-form-next-question" type="submit" value="Next Question!" />
          </form>
        </>
      );
    }
  }

  function PlayingGame() {
    if (handleAnswer) {
      return (
        <>
          <ReactLogo />
          <HandleAnswerForm />
        </>
      );
    }

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
        <p id="game-over-congrats">Congratulations you did great!</p>
        <p id="game-over-score" value={score}>
          Score: {score}
        </p>
        <form id="game-over-start-new-game-form" onSubmit={handleStartNewGame}>
          <input id="game-over-start-new-game-submit" type="submit" value="Start New Game" />
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
