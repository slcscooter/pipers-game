import { By, until, WebDriver } from "selenium-webdriver";
import { clickElementByID } from "../components/clicks";
import { clearInputTextByID } from "../components/inputs";
import { validatesAttributeByID, validatesElementByID } from "../components/validators";
import { nextQuestion } from "./next-question";

export async function validatesIncorrectAnswer(driver: WebDriver): Promise<WebDriver> {
  // validates react logo exists
  await validatesElementByID(driver, `react-logo`);

  // calculates the incorrect answer
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
  const incorrectAnswer = 4550;

  // enters the incorrect answer
  await clearInputTextByID(driver, `submit-answer-form-input`, incorrectAnswer.toString());

  await validatesAttributeByID(
    driver,
    `submit-answer-form-input`,
    `value`,
    incorrectAnswer.toString()
  );

  // submits incorrect answer
  await clickElementByID(driver, `submit-answer-form-submit-answer`);

  // validates incorrect answer was submitted
  await validatesElementByID(driver, `logo-state-incorrect-answer`);
  await nextQuestion(driver);

  return driver;
}
