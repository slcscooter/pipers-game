import { WebDriver } from "selenium-webdriver";
import { clickElementByID } from "../components/clicks";
import { validatesElementByID } from "../components/validators";

export async function nextQuestion(driver: WebDriver): Promise<WebDriver> {
  // clicks next question
  await clickElementByID(driver, `handle-answer-form-next-question`);

  // validates next question populated
  await validatesElementByID(driver, `submit-answer-form-submit-answer`);

  return driver;
}
