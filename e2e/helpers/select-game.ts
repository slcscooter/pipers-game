import { WebDriver } from "selenium-webdriver";
import { clickElementByID } from "../components/clicks";
import { validatesElementByID } from "../components/validators";

export async function selectGame(driver: WebDriver, game: string): Promise<WebDriver> {
  // validates games are available
  await validatesElementByID(driver, `select-game-plus-button`);
  await validatesElementByID(driver, `select-game-multiply-button`);
  await validatesElementByID(driver, `select-game-minus-button`);

  const selectedGame = game === "PLUS" ? "plus" : game === "MULTIPLY" ? "multiply" : "minus";

  // clicks on selected game
  await clickElementByID(driver, `select-game-${selectedGame}-button`);

  // validates correct game selected
  await validatesElementByID(driver, `question-card-operator-${selectedGame}`);

  return driver;
}
