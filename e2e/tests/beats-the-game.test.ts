import { WebDriver } from "selenium-webdriver";
import { navigateToGame } from "../helpers/navigate-to-Game";
import { beatsTheGame } from "../helpers/beats-the-game";

let driver: WebDriver;

describe("beats the game", () => {
  beforeAll(async () => {
    // navigates to game
    driver = await navigateToGame();
  });

  it(`should beats the game`, async () => {
    // validates beats the game
    driver = await beatsTheGame(driver);
  });

  afterAll(async () => {
    console.log(`beats the game ran`);
    await driver.quit();
  });
});
