import { By, until, WebDriver } from "selenium-webdriver";

export async function validatesCorrectPage(
  driver: WebDriver,
  urlString: string,
  headingText: string
): Promise<WebDriver> {
  // validates on correct page
  await driver.wait(until.urlContains(urlString));

  // validates page heading text
  await driver.sleep(500);
  const pageHeading = await driver.wait(until.elementLocated(By.css(".page-heading")), 15000);
  await driver.wait(until.elementIsVisible(pageHeading), 15000);
  expect(await pageHeading.getText()).toBe(headingText);

  return driver;
}

export async function validatesElementTextByID(
  driver: WebDriver,
  id: string,
  stringValidator: string
): Promise<WebDriver> {
  // validates element text
  const element = await driver.wait(until.elementLocated(By.id(id)), 15000);
  await driver.wait(until.elementIsVisible(element), 15000, `element not visible by: ${id}`);

  expect(await element.getText()).toContain(stringValidator);
  expect(await element.isDisplayed()).toBe(true);

  return driver;
}

export async function validatesParentElementTextByID(
  driver: WebDriver,
  elementID: string,
  stringValidator: string,
  parentTextElementID?: string
): Promise<WebDriver> {
  // validates parent element text
  const element = await driver.wait(until.elementLocated(By.id(elementID)), 15000);
  const parentElement = await element.findElement(By.xpath("./.."));

  if (parentTextElementID !== undefined) {
    const elementValidate = await parentElement.findElement(By.id(parentTextElementID)).getText();

    expect(elementValidate).toContain(stringValidator);
    expect(await element.isDisplayed()).toBe(true);
  } else {
    const elementValidate = await parentElement.getText();
    expect(elementValidate).toContain(stringValidator);

    expect(await element.isDisplayed()).toBe(true);
  }

  return driver;
}

export async function validatesElementTextByCSS(
  driver: WebDriver,
  css: string,
  stringValidator: string
): Promise<WebDriver> {
  const element = await driver.wait(until.elementLocated(By.css(css)), 15000);
  await driver.wait(until.elementIsVisible(element), 15000, `element not visible by: ${css}`);

  expect(await element.getText()).toContain(stringValidator);
  expect(await element.isDisplayed()).toBe(true);

  return driver;
}

export async function validatesParentElementTextByCSS(
  driver: WebDriver,
  elementCSS: string,
  stringValidator: string
): Promise<WebDriver> {
  const element = await driver.wait(until.elementLocated(By.css(elementCSS)), 15000);
  const parentElement = await element.findElement(By.xpath("./.."));
  const elementValidate = await parentElement.getText();

  expect(elementValidate).toContain(stringValidator);
  expect(await element.isDisplayed()).toBe(true);

  return driver;
}

export async function validatesElementsTextsByCSS(
  driver: WebDriver,
  css: string,
  stringValidator: string[]
): Promise<WebDriver> {
  await driver.wait(until.elementLocated(By.css(css)), 15000);

  const elements = await driver.findElements(By.css(css));
  const elementsText = elements.map((element) => element.getText());
  const elementsTexts = await Promise.all(elementsText);

  expect(elementsTexts).toEqual(stringValidator);

  return driver;
}

export async function validatesDownloading(driver: WebDriver): Promise<WebDriver> {
  await validatesElementStalesByCSS(driver, ".bp3-spinner");

  return driver;
}

export async function validatesElementByID(driver: WebDriver, id: string): Promise<WebDriver> {
  const element = await driver.wait(until.elementLocated(By.id(id)), 15000);
  await driver.wait(until.elementIsVisible(element), 15000, `element not visible by: ${id}`);

  expect(await element.isDisplayed()).toBe(true);

  return driver;
}

export async function validatesElementByCSS(driver: WebDriver, css: string): Promise<WebDriver> {
  const element = await driver.wait(until.elementLocated(By.css(css)), 15000);
  await driver.wait(until.elementIsVisible(element), 15000, `element not visible by: ${css}`);

  expect(await element.isDisplayed()).toBe(true);

  return driver;
}

export async function validatesElementNotFoundByID(
  driver: WebDriver,
  id: string
): Promise<WebDriver> {
  const elements = await driver.findElements(By.id(id));
  expect(elements.length).toBe(0);

  return driver;
}

export async function validatesElementNotFoundByCSS(
  driver: WebDriver,
  css: string
): Promise<WebDriver> {
  const elements = await driver.findElements(By.css(css));
  expect(elements.length).toBe(0);

  return driver;
}

export async function validatesLengthByID(
  driver: WebDriver,
  id: string,
  validator: number
): Promise<WebDriver> {
  if (validator !== 0) {
    await driver.wait(until.elementLocated(By.id(id)), 15000);
  }

  const elements = await driver.findElements(By.id(id));
  expect(elements.length).toBe(validator);

  return driver;
}

export async function validatesLengthByCSS(
  driver: WebDriver,
  css: string,
  validator: number
): Promise<WebDriver> {
  if (validator !== 0) {
    await driver.wait(until.elementLocated(By.css(css)), 15000);
  }

  const elements = await driver.findElements(By.css(css));
  expect(elements.length).toBe(validator);

  return driver;
}

export async function validatesAttributeByID(
  driver: WebDriver,
  id: string,
  attribute: string,
  validator: string,
  notFound?: boolean
): Promise<WebDriver> {
  const element = await driver.wait(until.elementLocated(By.id(id)), 15000);
  await driver.wait(until.elementIsVisible(element), 15000, `element not visible by: ${id}`);

  const attributeValidate = await element.getAttribute(attribute);

  if (notFound) {
    expect(attributeValidate).not.toContain(validator);
  } else {
    expect(attributeValidate).toContain(validator);
  }

  return driver;
}

export async function validatesAttributeByCSS(
  driver: WebDriver,
  css: string,
  attribute: string,
  validator: string,
  notFound?: boolean
): Promise<WebDriver> {
  const element = await driver.wait(until.elementLocated(By.css(css)), 15000);
  await driver.wait(until.elementIsVisible(element), 15000, `element not visible by: ${css}`);

  const attributeValidate = await element.getAttribute(attribute);

  if (notFound) {
    expect(attributeValidate).toBe(null);
  } else {
    expect(attributeValidate).toContain(validator);
  }

  return driver;
}

export async function validatesElementSelectedByID(
  driver: WebDriver,
  id: string,
  config: { notSelected?: boolean; visible?: boolean }
): Promise<WebDriver> {
  const { notSelected = false, visible = false } = config;

  const element = await driver.wait(until.elementLocated(By.id(id)), 15000);

  if (visible) {
    await driver.wait(until.elementIsVisible(element), 15000, `element not visible by: ${id}`);
  }

  const elementValidate = await element.isSelected();

  expect(elementValidate).toBe(!notSelected);

  return driver;
}

export async function validatesElementEnabledByID(
  driver: WebDriver,
  id: string,
  config: { notEnabled?: boolean; visible?: boolean }
): Promise<WebDriver> {
  const { notEnabled = true, visible = false } = config;

  const element = await driver.wait(until.elementLocated(By.id(id)), 15000);

  if (!visible) {
    await driver.wait(until.elementIsVisible(element), 15000, `element not visible by: ${id}`);
  }

  const elementValidate = await element.isEnabled();

  if (notEnabled) {
    expect(elementValidate).toBe(false);
  } else {
    expect(elementValidate).toBe(true);
  }

  return driver;
}

export async function validatesElementStalesByID(
  driver: WebDriver,
  id: string,
  timeout?: number
): Promise<WebDriver> {
  const element = await driver.wait(until.elementLocated(By.id(id)), 15000);

  await driver.wait(until.elementIsVisible(element), 15000, `element not visible by: ${id}`);

  if (timeout !== null) {
    await driver.wait(until.stalenessOf(element), timeout, `element not stale by: ${id}`);
  } else {
    await driver.wait(until.stalenessOf(element), 15000, `element not stale by: ${id}`);
  }
  return driver;
}

export async function validatesElementStalesByCSS(
  driver: WebDriver,
  css: string,
  timeout?: number
): Promise<WebDriver> {
  const element = await driver.wait(until.elementLocated(By.css(css)), 15000);

  await driver.wait(until.elementIsVisible(element), 15000, `element not visible by: ${css}`);

  if (timeout !== null) {
    await driver.wait(until.stalenessOf(element), timeout, `element not stale by: ${css}`);
  } else {
    await driver.wait(until.stalenessOf(element), 15000, `element not stale by: ${css}`);
  }

  return driver;
}
