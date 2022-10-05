import { By, until, WebDriver, WebElement } from "selenium-webdriver";
import { validatesElementStalesByCSS } from "./validators";

/**
 * Generic Buttons
 */

async function doClickElement(
  driver: WebDriver,
  element: WebElement,
  stale?: boolean,
  identifier?: string
): Promise<WebDriver> {
  await driver.wait(
    until.elementIsVisible(element),
    5000,
    `element not visible, element text: ${identifier}`
  );
  await element.click();

  if (stale) {
    await driver.wait(
      until.stalenessOf(element),
      15000,
      `element won't stale, element text: ${identifier}`
    );
  }

  return driver;
}

export async function clickElementByID(
  driver: WebDriver,
  id: string,
  stale?: boolean
): Promise<WebDriver> {
  const element = await driver.wait(until.elementLocated(By.id(id)), 15000);
  await doClickElement(driver, element, stale, id);

  return driver;
}

export async function clickElementByCSS(
  driver: WebDriver,
  css: string,
  stale?: boolean
): Promise<WebDriver> {
  const element = await driver.wait(until.elementLocated(By.css(css)), 15000);
  await doClickElement(driver, element, stale, css);

  return driver;
}

export async function clickElementByHREF(
  driver: WebDriver,
  href: string,
  stale?: boolean
): Promise<WebDriver> {
  const element = await driver.wait(until.elementLocated(By.css(`[href='${href}']`)), 15000);
  await doClickElement(driver, element, stale, href);

  return driver;
}

export async function clickPrecedingSiblingByElementCSS(
  driver: WebDriver,
  css: string,
  stale?: boolean
): Promise<WebDriver> {
  const selector = await driver.wait(until.elementLocated(By.css(css)), 5000);
  const precedingSibling = await selector.findElement(
    By.xpath("preceding-sibling::*[1][self::option]")
  ); // selects previous sibling element
  await doClickElement(driver, precedingSibling, stale, css);

  return driver;
}

export async function clickParentByElementID(
  driver: WebDriver,
  id: string,
  stale?: boolean
): Promise<WebDriver> {
  const element = await driver.wait(until.elementLocated(By.id(id)), 5000);
  const elementParent = await element.findElement(By.xpath("./.."));
  await doClickElement(driver, elementParent, stale, id);

  return driver;
}

export async function minimalButtonClick(driver: WebDriver, stale?: boolean): Promise<WebDriver> {
  // finds and clicks on cancel report button
  const minimalButton = await driver.wait(
    until.elementLocated(By.css(".bp3-minimal.everee-bp3-button")),
    5000
  );
  await doClickElement(driver, minimalButton, stale, "Minimal Button");

  return driver;
}

export async function primaryButtonClick(driver: WebDriver, stale?: boolean): Promise<WebDriver> {
  // finds and clicks on download report button
  const primaryButton = await driver.wait(
    until.elementLocated(By.css(".bp3-intent-primary")),
    5000
  );
  await doClickElement(driver, primaryButton, stale, "Primary Button");

  await driver.sleep(500);

  return driver;
}

/**
 * Report Buttons
 */

export async function generateReportButtonClick(
  driver: WebDriver,
  timeout?: number
): Promise<WebDriver> {
  // finds and clicks on generate report button
  const generateReportButton = await driver.wait(
    until.elementLocated(By.css(".report-modal-generation-container .bp3-intent-primary")),
    15000
  );
  await doClickElement(driver, generateReportButton, false, "Generate Report Button");

  if (timeout !== null) {
    await validatesElementStalesByCSS(driver, ".bp3-spinner", timeout);
  } else {
    await validatesElementStalesByCSS(driver, ".bp3-spinner", 5000);
  }

  return driver;
}
