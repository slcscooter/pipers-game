import { By, until, WebDriver } from "selenium-webdriver";
import { clickElementByID } from "../components/clicks";
import { clearInputTextByID, doubleClickInputTextByID } from "../components/inputs";
import { validatesAttributeByID, validatesElementByID } from "../components/validators";
import { testEnvURL, buildDriver } from "../config";

let driver: WebDriver;

export async function validatesCorrectAnswer(driver: WebDriver): Promise<WebDriver> {
  // validates react logo exists
  await validatesElementByID(driver, `react-logo`);

  // calculates the answer
  const topValue = parseInt(
    await await driver.findElement(By.id(`question-card-top-value`)).getAttribute(`value`)
  );
  const bottomValue = parseInt(
    await driver.findElement(By.id(`question-card-bottom-value`)).getAttribute(`value`)
  );
  const answer = topValue + bottomValue;

  console.log(`Answer: ${answer}, topValue: ${topValue}, bottomValue: ${bottomValue}`);

  // enters the correct answer
  await doubleClickInputTextByID(driver, `submit-answer-form-input`, answer.toString());

  // submits correct answer
  await clickElementByID(driver, `submit-answer-form-submit-answer`);

  // validates correct answer was submitted
  await validatesElementByID(driver, `logo-state-great-job`);

  return driver;
}
