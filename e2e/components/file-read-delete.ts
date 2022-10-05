import fs from "fs";
import { WebDriver } from "selenium-webdriver";

function pathsFilter(startsWith: string, endsWith: string) {
  const folderFiles = fs.readdirSync("./");
  const pathsFiltered = folderFiles
    .filter((file) => file.startsWith(startsWith))
    .filter((file) => file.endsWith(endsWith));

  return pathsFiltered.toString();
}

export function deleteAlreadyDownloadedFiles(startsWith: string, endsWith: string) {
  const pathsString = pathsFilter(startsWith, endsWith);

  if (fs.existsSync(pathsString)) {
    // delete if there is any existing file with same name
    fs.unlinkSync(pathsString);
  }
}

export async function verifyFileDownloaded(
  driver: WebDriver,
  startsWith: string,
  startsWithEdit: string,
  endsWith: string
): Promise<WebDriver> {
  function validate(startsWith: string, startsWithEdit: string, endsWith: string) {
    const pathsString = pathsFilter(startsWith, endsWith);
    const startsWithValidate = fs.existsSync(pathsString);

    if (startsWithValidate) {
      return startsWithValidate;
    }

    const pathsStringEdit = pathsFilter(startsWithEdit, endsWith);
    const startsWithEditValidate = fs.existsSync(pathsStringEdit);

    return startsWithEditValidate;
  }

  await driver.sleep(3000);

  const validateDownload = validate(startsWith, startsWithEdit, endsWith);

  expect(validateDownload).toBe(true);

  return driver;
}

export async function verifyFileDownloadedNoEdit(
  driver: WebDriver,
  startsWith: string,
  endsWith: string
): Promise<WebDriver> {
  await driver.sleep(3000);

  const pathsString = pathsFilter(startsWith, endsWith);
  const startsWithValidate = fs.existsSync(pathsString);

  expect(startsWithValidate).toBe(true);

  return driver;
}
