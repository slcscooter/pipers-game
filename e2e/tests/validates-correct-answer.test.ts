import { WebDriver } from "selenium-webdriver";
import { navigateToGame } from "../helpers/navigate-to-Game";
import { validatesCorrectAnswer } from "../helpers/validates-correct-answer";

let driver: WebDriver;

describe("validate correct answer", () => {
  beforeAll(async () => {
    // navigates to game
    driver = await navigateToGame();
  });

  it(`should validate an correct answer`, async () => {
    // validates correct answer behavior
    driver = await validatesCorrectAnswer(driver);
  });

  afterAll(async () => {
    console.log(`validate correct answer ran`);
    await driver.quit();
  });
});
