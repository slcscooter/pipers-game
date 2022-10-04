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
  const [userInput, setUserInput] = useState("");
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

  function AnswerForm() {
    const logoState =
      question === 1 ? <p>Good luck!</p> : <p>You've got this!</p>;
    const greenLogoState = image === greenLogo ? <p>Great job!</p> : logoState;
    const redLogoState = <p>Incorrect answer, keep trying!</p>;

    const answerPrompt = image === redLogo ? redLogoState : greenLogoState;

    return (
      <>
        <input
          type="text"
          id="user-input"
          name="user-input"
          value={userInput}
          onChange={handleChange}
        />
        {answerPrompt}
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

  class SubmitAnswerForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
      alert("A name was submitted: " + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  return (
    <>
      <ReactLogo />
      <ProgressBar />
      <QuestionCard />
      <AnswerForm />
      <SubmitAnswerForm />
    </>
  );
}
