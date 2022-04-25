import webdriver from 'selenium-webdriver';
import { By } from 'selenium-webdriver';
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

it('changes the icon alt text when clicked ', async () => {
  await driver.get(serverUri);

  //const darkModeButton = await
 driver.findElement().By.Xpath["//button[@class='app__dark-mode-btn icon level-right']"].click();
 String text = driver.findElement(By.Xpath("//button[@class="app__dark-mode-btn icon level-right"]")).getText();
Assert.assetEquals(text,"Set Light Mode")

 driver.findElement().By.Xpath["//button[@class='app__dark-mode-btn icon level-right']"].click();
 String text = driver.findElement(By.Xpath("//button[@class="app__dark-mode-btn icon level-right"]")).getText();
Assert.assetEquals(text,"Set Light Mode")


  

  //const buttonTitlePre = await ...
  expect(buttonTitlePre).toBe("Set dark mode");

  // ...

  // const iconTitlePost = await ...
  expect(iconTitlePost).toBe("Set light mode");

});

afterAll(() => {
  return driver.quit();
});
