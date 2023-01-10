const webdriver = require("selenium-webdriver");
const { Given, When, Then } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();

Given(
  "When I go to Login Page",
  { timeout: 1000 * 1000 },
  async () => {
    await driver.get("http://localhost:3000/login");
  }
);

When("I search my email", async () => {
  await driver
    .findElement(By.name("email"))
    .sendKeys("manisha2@gmail.com");
});

When("I hi my password", async () => {
  await driver.findElement(By.name("password")).sendKeys("manisha@12");


});
When("I press login", async () => {
  let login = driver.wait(
    until.elementLocated(By.xpath("//button[normalize-space()='Login']"))
  );
  login.click();
});

When("I press search", async () => {
    let login = driver.wait(
      until.elementLocated(By.xpath("//input[@placeholder='Search']"))
    );
    login.sendKeys('python');
  });

  When("I press btn", async () => {
    let login = driver.wait(
      until.elementLocated(By.name("searchbtn"))

    );
    login.click();
    setTimeout(async() => {
      await driver.get("http://localhost:3000/search/python");


    
    }, 3000);

  });


  

Then("successfull message is shown", async () => {
 
  
  driver
    .wait( until.elementLocated(By.xpath("//div[@class='ant-empty-description']")))
    .getText()
    .then((text) => {
      if (text === "No data") {
        console.log(text);
        return true;
      } else {
        console.log("Fail");
        return false;
      }
    });
});