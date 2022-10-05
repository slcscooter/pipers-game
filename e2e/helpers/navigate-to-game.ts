import { until, WebDriver } from "selenium-webdriver";
import { validatesElementByID } from "../components/validators";
import { testEnvURL, buildDriver } from "../config";

let driver: WebDriver;

export async function navigateToGame(): Promise<WebDriver> {
  // builds the driver
  driver = await buildDriver();

  // navigates to app
  await driver.get(`${testEnvURL()}`);
  await driver.wait(until.urlContains(`${testEnvURL()}`));

  // validates react logo exists
  await validatesElementByID(driver, `react-logo`);

  return driver;
}
