import { WebDriver } from "selenium-webdriver";
import { navigateToGame } from "../helpers/navigate-to-Game";
import { selectGame } from "../helpers/select-game";
import { validatesCorrectAnswer } from "../helpers/validates-correct-answer";

let driver: WebDriver;

describe("validate select game loads correct game", () => {
  beforeAll(async () => {
    // navigates to game
    driver = await navigateToGame();
  });

  it(`should validate selecting plus game loads correct game`, async () => {
    // validates selecting plus game loads correct game
    await selectGame(driver, "PLUS");

    // resets for next test
    await driver.executeScript("document.location.reload(true)");
  });

  it(`should validate selecting multiply game loads correct game`, async () => {
    // validates selecting plus game loads correct game
    await selectGame(driver, "MULTIPLY");

    // resets for next test
    await driver.executeScript("document.location.reload(true)");
  });

  afterAll(async () => {
    console.log(`validate select game loads correct game ran`);
    await driver.quit();
  });
});
