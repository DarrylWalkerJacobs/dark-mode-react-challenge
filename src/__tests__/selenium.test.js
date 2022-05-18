import webdriver from 'selenium-webdriver';
import { By } from 'selenium-webdriver';
import ChromeSelenium from 'selenium-webdriver/chrome';
import 'chromedriver';

const serverUri = 'http://localhost:3000';
const appTitle = 'Dark Mode ';

const options = new ChromeSelenium.Options();

options.addArguments('--headless');
options.addArguments('--no-sandbox');
options.addArguments('--disable-dev-shm-usage');

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

it('has the correct application title', async () => {
  await driver.get(serverUri);

  const title = await driver.getTitle();

  expect(title).toBe(appTitle);
});

it('changes the dark mode icon tooltip text when clicked ', async () => {
  await driver.get(serverUri);
     
  const driver = new chromedriver();
  driver.get("https://625457911794750cc4c7545f--the-awesome-darrylwalkerjacobs-site.netlify.app/");

  driver.findElement(By.xpath('//*[@class="app__dark-mode-btn icon level-right"]')).click();
  thread.sleep(5000);
  Actions action= new Actions(driver);
  action.


  driver.findElement(By.xpath('//*[@class="app__dark-mode-btn icon level-right"]')).getText();

  


  const buttonTitlePre = await //
  expect(buttonTitlePre).toBe("Set dark mode");

  //
  
  const iconTitlePost = await //
  expect(iconTitlePost).toBe("Set light mode");

});

afterAll(() => {
  return driver.quit();
});
