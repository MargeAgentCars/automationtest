// @ts-check
const { test, expect } = require('@playwright/test');
//const {chrome} = require('automationtest');

//(async () => {
  //const browser = await chrome.launch();
  //const context = await browser.newContext();
 // const page = await context.newPage();

  // Navigate to the login page
  test('has title', async ({ page }) => {
  await page.goto('https://www.rentingcarz.com/');
  });

  test('get started link', async ({ page }) => {
  // Click on the "Login" button
  await page.click('text=Login');

  // Fill in the login form
  await page.fill('#username', 'your_username');
  await page.fill('#password', 'your_password');

  // Submit the login form
  await page.click('button[type="submit"]');

  // Wait for the login process to complete
  //await page.waitForNavigation();

  // Verify if the login was successful
  const loggedInUser = await page.innerText('.navbar-logged .navbar-logged-name');
  console.log(`Logged in as: ${loggedInUser}`);

  // Close the browser
  //await browser.close();
});
//})();
