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

   
  // 

const buttonTitlePre = await //;
expect(buttonTitlePre).toBe("Set dark mode");


const txtOfMode = driver.findElement(By.xpath("").getTitle());
if(txtOfMode.equals("set dark mode"))
{
 driver.findElement(By.xpath("")).click;
}
//
  
const iconTitlePost = await //;
expect(iconTitlePost).toBe("Set light mode");



});

afterAll(() => {
  return driver.quit();
});
