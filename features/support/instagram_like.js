const {Builder, By, Key, until, Condition, xpath, css} = require("selenium-webdriver");
const { Given, When, Then, defineSupportCode } = require('cucumber');

const driver = new Builder().forBrowser("chrome").build();

Given('I visit instagram', async function() {
    await driver.get("https://www.instagram.com");  
});

When('I see log in form', async function() {
    const condition = until.elementLocated(By.name('username'));
    await driver.wait(condition,6000);
});

Then('I log in with {string} username and {string} password', async function(user, pass){
    const username = await driver.findElement(By.name("username"));
    username.sendKeys('user');
    const password = await driver.findElement(By.name("password"));
    password.sendKeys('pass', Key.ENTER);
});

When('I see home button', async function(){
    const condition = until.elementLocated(By.className("_8-yf5 "));
    await driver.wait(condition, 7000);
});

Then('I click in with {string}',  async function(home){
    const homepage = await driver.findElement(By.className("_8-yf5 ")).click();
    //await driver.wait(condition, 7000);
});

When('I see declaration button', async function(){
    const condition = until.elementLocated(By.className('aOOlW   HoLwm '));
    await driver.wait(condition, 7000);
});

Then('I see button click in with {string}', async function(bildirim){
    const bildirimbutonu = await driver.findElement(By.className('aOOlW   HoLwm ')).click();
    //await driver.wait(condition, 7000);
});

When('I see like button', async function(){
    const condition = until.elementLocated(By.className('fr66n'));
    //await driver.wait(condition, 7000);
});

Then('I click in with like button {string}', async function(begen){
    const begenibutonu = await driver.findElement(By.className('fr66n')).click();
    await driver.wait(condition, 7000);
});
