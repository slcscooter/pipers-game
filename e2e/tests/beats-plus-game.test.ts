import { WebDriver } from "selenium-webdriver";
import { navigateToGame } from "../helpers/navigate-to-Game";
import { beatsTheGame } from "../helpers/beats-the-game";
import { selectGame } from "../helpers/select-game";

let driver: WebDriver;

describe("beats the game for the plus game", () => {
  beforeAll(async () => {
    // navigates to game
    driver = await navigateToGame();
    await selectGame(driver, "PLUS");
  });

  it(`should beat the game for plus game`, async () => {
    // validates beats the game
    await beatsTheGame(driver, "PLUS");
  });

  afterAll(async () => {
    console.log(`validate beats the game for plus game ran`);
    await driver.quit();
  });
});
