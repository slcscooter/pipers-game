import { WebDriver } from "selenium-webdriver";
import { navigateToGame } from "../helpers/navigate-to-Game";
import { selectGame } from "../helpers/select-game";
import { validatesIncorrectAnswer } from "../helpers/validates-incorrect-answer";

let driver: WebDriver;

describe("validate incorrect answer for selected game", () => {
  beforeAll(async () => {
    // navigates to game
    driver = await navigateToGame();
    await selectGame(driver, "PLUS");
  });

  it(`should validate an incorrect answer plus game`, async () => {
    // validates correct answer behavior
    await validatesIncorrectAnswer(driver);

    // resets for next test
    await driver.executeScript("document.location.reload(true)");
    await selectGame(driver, "MULTIPLY");
  });

  it(`should validate an incorrect answer multiply game`, async () => {
    // validates correct answer behavior
    await validatesIncorrectAnswer(driver);

    // resets for next test
    await driver.executeScript("document.location.reload(true)");
    await selectGame(driver, "MINUS");
  });

  it(`should validate an incorrect answer minus game`, async () => {
    // validates correct answer behavior
    await validatesIncorrectAnswer(driver);
  });

  afterAll(async () => {
    console.log(`validate incorrect answer for selected game ran`);
    await driver.quit();
  });
});
