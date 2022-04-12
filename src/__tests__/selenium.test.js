import webdriver, { By } from 'selenium-webdriver';
import ChromeSelenium from 'selenium-webdriver/chrome';
import 'chromedriver';

const serverUri = 'http://localhost:3000';
const appTitle = 'Dark Mode Challenge';

const options = new ChromeSelenium.Options();

options.addArguments('--headless');
options.addArguments('--no-sandbox');
options.addArguments('--disable-dev-shm-usage');

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

it('returns the localhost app title', async () => {
  await driver.get(serverUri);

  const title = await driver.getTitle();

  expect(title).toBe(appTitle);
});

it('changes the icon alt text when clicked', async () => {
  await driver.get(serverUri);

  const darkModeButton = await driver.findElement(
    By.className('app__dark-mode-btn')
  );

  const buttonTitlePre = await darkModeButton.getAttribute('title');
  expect(buttonTitlePre).toBe('Set dark mode');

  darkModeButton.click();

  const iconTitlePost = await darkModeButton.getAttribute('title');
  expect(iconTitlePost).toBe('Set light mode');
});

afterAll(() => {
  return driver.quit();
});
