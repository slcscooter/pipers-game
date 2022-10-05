import { WebDriver } from "selenium-webdriver";
import { navigateToGame } from "../helpers/navigate-to-Game";

let driver: WebDriver;

describe("navigate to game", () => {
  it(`should navigate to game`, async () => {
    // navigates to game
    driver = await navigateToGame();
  });

  afterAll(async () => {
    console.log(`navigate to game ran`);
    await driver.quit();
  });
});
