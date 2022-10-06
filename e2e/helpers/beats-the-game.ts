import { By, until, WebDriver } from "selenium-webdriver";
import { clickElementByID } from "../components/clicks";
import { clearInputTextByID } from "../components/inputs";
import { validatesAttributeByID, validatesElementByID } from "../components/validators";
import { validatesCorrectAnswer } from "./validates-correct-answer";

export async function beatsTheGame(driver: WebDriver): Promise<WebDriver> {
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);
  await validatesCorrectAnswer(driver);

  // calculates the final answer
  const topValue = parseInt(
    await driver
      .wait(until.elementLocated(By.id(`question-card-top-value`)), 5000)
      .getAttribute(`value`)
  );
  const bottomValue = parseInt(
    await driver
      .wait(until.elementLocated(By.id(`question-card-bottom-value`)), 5000)
      .getAttribute(`value`)
  );
  const answer = topValue + bottomValue;

  // enters the final correct answer
  await clearInputTextByID(driver, `submit-answer-form-input`, answer.toString());
  const inputCheck = await driver
    .wait(until.elementLocated(By.id(`submit-answer-form-input`)), 5000)
    .getAttribute(`value`);

  if (inputCheck === "") {
    await clearInputTextByID(driver, `submit-answer-form-input`, answer.toString());
  }

  await validatesAttributeByID(driver, `submit-answer-form-input`, `value`, answer.toString());

  // submits the final correct answer
  await clickElementByID(driver, `submit-answer-form-submit-answer`);

  // validates final correct answer was submitted
  await validatesElementByID(driver, `game-over-congrats`);

  return driver;
}
