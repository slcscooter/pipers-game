import { WebDriver } from "selenium-webdriver";
import { navigateToGame } from "../helpers/navigate-to-Game";
import { beatsTheGame } from "../helpers/beats-the-game";
import { selectGame } from "../helpers/select-game";

let driver: WebDriver;

describe("beats the game for the minus game", () => {
  beforeAll(async () => {
    // navigates to game
    driver = await navigateToGame();
    await selectGame(driver, "MINUS");
  });

  it(`should beat the game for multiply game`, async () => {
    // validates beats the game
    await beatsTheGame(driver, "MINUS");
  });

  afterAll(async () => {
    console.log(`validate beats the game for minus game ran`);
    await driver.quit();
  });
});
