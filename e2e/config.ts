import { Builder, WebDriver } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";

/** Configures a new WebDriver for e2e testing */
export async function buildDriver(): Promise<WebDriver> {
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(setChromeOptions(new chrome.Options()))
    .build();

  return driver;
}

/** Sets chrome options for WebDriver */
function setChromeOptions<T extends chrome.Options>(options: T): T {
  options.windowSize({ width: 1920, height: 1080 });
  options.addArguments("--incognito");
  options.addArguments("--disable-extensions");
  options.addArguments("--disable-popup-blocking");
  options.addArguments("--disable-notifications");
  options.addArguments("detach: true");
  options.headless();

  return options;
}

/** Sets the environment and provides base url */
export const testEnvURL = function (): string {
  return "http://localhost:3016/";
};
