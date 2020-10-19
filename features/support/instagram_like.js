const {Builder, By, Key, until, Condition, xpath, css} = require("selenium-webdriver");
const { Given, When, Then, defineSupportCode } = require('cucumber');

const driver = new Builder().forBrowser("chrome").build();

Given('I visit instagram',{timeout: 10 * 1000}, async function() {
    await driver.get("https://www.instagram.com");  
});

When('I see log in form',{timeout: 10 * 1000}, async function() {
    const condition = until.elementLocated(By.name('username'));
    await driver.wait(condition);
});

Then('I log in with {string} username and {string} password', async function(user, pass){
    const username = await driver.findElement(By.name("username"));
    username.sendKeys('cucumber_test');
    const password = await driver.findElement(By.name("password"));
    password.sendKeys('741236985', Key.ENTER);
});

When('I see home button', {timeout: 10 * 1000}, async function(){
    const condition = until.elementLocated(By.className("_8-yf5 "));
    await driver.wait(condition);
});

Then('I click in with {string}',{timeout: 10 * 1000},  async function(home){
    const homepage = await driver.findElement(By.className("_8-yf5 ")).click();
    
});

When('I see declaration button',{timeout: 10 * 1000}, async function(){
    const condition = until.elementLocated(By.className('aOOlW   HoLwm '));
    await driver.wait(condition);
});

Then('I see button click in with {string}',{timeout: 10 * 1000}, async function(bildirim){
    const bildirimbutonu = await driver.findElement(By.className('aOOlW   HoLwm ')).click();
   
});

When('I see like button',{timeout: 10 * 1000}, async function(){
    const condition = until.elementLocated(By.className('fr66n'));
    await driver.wait(condition);
});

Then('I click in with like button {string}',{timeout: 10 * 1000}, async function(begen){
    const begenibutonu = await driver.findElement(By.className('fr66n')).click();
    
});

