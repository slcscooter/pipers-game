import { By, until, WebDriver } from "selenium-webdriver";
import { clickElementByID } from "../components/clicks";
import { clearInputTextByID, doubleClickInputTextByID } from "../components/inputs";
import { validatesAttributeByID, validatesElementByID } from "../components/validators";
import { testEnvURL, buildDriver } from "../config";

let driver: WebDriver;

export async function validatesIncorrectAnswer(driver: WebDriver): Promise<WebDriver> {
  // validates react logo exists
  await validatesElementByID(driver, `react-logo`);

  // calculates the incorrect answer
  const topValue = parseInt(
    await await driver.findElement(By.id(`question-card-top-value`)).getAttribute(`value`)
  );
  const bottomValue = parseInt(
    await driver.findElement(By.id(`question-card-bottom-value`)).getAttribute(`value`)
  );
  const incorrectAnswer = topValue + bottomValue + 1;

  // enters the incorrect answer
  await doubleClickInputTextByID(driver, `submit-answer-form-input`, incorrectAnswer.toString());

  // submits incorrect answer
  await clickElementByID(driver, `submit-answer-form-submit-answer`);

  // validates incorrect answer was submitted
  await validatesElementByID(driver, `logo-state-incorrect-answer`);

  return driver;
}
