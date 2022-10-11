import { WebDriver } from "selenium-webdriver";
import { navigateToGame } from "../helpers/navigate-to-Game";
import { selectGame } from "../helpers/select-game";
import { validatesCorrectAnswer } from "../helpers/validates-correct-answer";

let driver: WebDriver;

describe("validate correct answer for selected game", () => {
  beforeAll(async () => {
    // navigates to game
    driver = await navigateToGame();
    await selectGame(driver, "PLUS");
  });

  it(`should validate an correct answer for plus game`, async () => {
    // validates correct answer behavior
    await validatesCorrectAnswer(driver, "PLUS");

    // resets for next test
    await driver.executeScript("document.location.reload(true)");
    await selectGame(driver, "MULTIPLY");
  });

  it(`should validate an correct answer multiply game`, async () => {
    // validates correct answer behavior
    await validatesCorrectAnswer(driver, "MULTIPLY");

    // resets for next test
    await driver.executeScript("document.location.reload(true)");
    await selectGame(driver, "MINUS");
  });

  it(`should validate an correct answer minus game`, async () => {
    // validates correct answer behavior
    await validatesCorrectAnswer(driver, "MINUS");
  });

  afterAll(async () => {
    console.log(`validate correct answer for selected game ran`);
    await driver.quit();
  });
});
