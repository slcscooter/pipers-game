import { By, until, WebDriver } from "selenium-webdriver";
import { clickElementByID } from "../components/clicks";
import { clearInputTextByID } from "../components/inputs";
import { validatesAttributeByID, validatesElementByID } from "../components/validators";
import { nextQuestion } from "./next-question";

export async function validatesCorrectAnswer(driver: WebDriver, game: string): Promise<WebDriver> {
  // validates react logo exists
  await validatesElementByID(driver, `react-logo`);

  // calculates the answer
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

  const answer =
    game === "PLUS"
      ? topValue + bottomValue
      : game === "MULTIPLY"
      ? topValue * bottomValue
      : topValue - bottomValue;

  // enters the correct answer
  await clearInputTextByID(driver, `submit-answer-form-input`, answer.toString());

  await validatesAttributeByID(driver, `submit-answer-form-input`, `value`, answer.toString());

  // submits correct answer
  await clickElementByID(driver, `submit-answer-form-submit-answer`);

  // validates correct answer was submitted
  await validatesElementByID(driver, `logo-state-great-job`);
  await nextQuestion(driver);

  return driver;
}
