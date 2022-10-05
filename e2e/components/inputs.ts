import { By, until, WebDriver } from "selenium-webdriver";

/**
 * Generic Input
 */

export async function clearInputTextByID(
  driver: WebDriver,
  id: string,
  inputString: string
): Promise<WebDriver> {
  const input = await driver.wait(until.elementLocated(By.id(id)), 5000);
  await driver.wait(until.elementIsVisible(input), 15000, `input not visible by: ${id}`);
  await input.clear();
  await input.sendKeys(inputString);

  return driver;
}

export async function clearInputTextByCSS(
  driver: WebDriver,
  css: string,
  inputString: string
): Promise<WebDriver> {
  const input = await driver.wait(until.elementLocated(By.css(css)), 5000);
  await driver.wait(until.elementIsVisible(input), 15000, `input not visible by: ${css}`);
  await input.clear();
  await input.sendKeys(inputString);

  return driver;
}

export async function doubleClickInputTextByID(
  driver: WebDriver,
  id: string,
  inputString: string
): Promise<WebDriver> {
  const input = await driver.wait(until.elementLocated(By.id(id)), 5000);
  await driver.wait(until.elementIsVisible(input), 15000, `input not visible by: ${id}`);

  const actions = driver.actions({ async: true });
  await actions.doubleClick(input).perform();

  await input.sendKeys(inputString);

  return driver;
}

export async function doubleClickInputTextByCSS(
  driver: WebDriver,
  css: string,
  inputString: string
): Promise<WebDriver> {
  const input = await driver.wait(until.elementLocated(By.css(css)), 5000);
  await driver.wait(until.elementIsVisible(input), 15000, `input not visible by: ${css}`);

  const actions = driver.actions({ async: true });
  await actions.doubleClick(input).perform();

  await input.sendKeys(inputString);

  return driver;
}
