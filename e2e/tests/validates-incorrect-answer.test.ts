import { WebDriver } from "selenium-webdriver";
import { navigateToGame } from "../helpers/navigate-to-Game";
import { validatesIncorrectAnswer } from "../helpers/validates-incorrect-answer";

let driver: WebDriver;

describe("validate incorrect answer", () => {
  beforeAll(async () => {
    // navigates to game
    driver = await navigateToGame();
  });

  it(`should validate an incorrect answer`, async () => {
    // validates correct answer behavior
    driver = await validatesIncorrectAnswer(driver);
  });

  afterAll(async () => {
    console.log(`validate incorrect answer ran`);
    await driver.quit();
  });
});
