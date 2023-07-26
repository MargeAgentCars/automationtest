import { test, expect } from '@playwright/test/Agentcars';


test('link', async ({ page }) => {
  await page.goto('https://agentcars.com/es/');
  await page.getByRole('link', { name: 'Logo' }).click();
  await page.getByRole('button', { name: 'Español (USD)' }).click();
  await page.locator('#gsaContactValue').selectOption('LATAM');
  await page.getByText('Nuestros aliados:').click();
  await page.locator('.w-14 > .mx-auto').first().click();
  await page.locator('div:nth-child(3) > .w-14 > .mx-auto').click();
  await page.locator('.w-\\[150px\\]').first().click();
  await page.locator('div:nth-child(2) > .w-\\[258px\\]').first().click();
  await page.locator('div:nth-child(8) > div > .flex > .w-\\[150px\\]').click();
  await page.locator('div:nth-child(9) > div:nth-child(2) > .w-\\[258px\\] > path').click();
  await page.locator('div').filter({ hasText: /^Agentcars$/ }).nth(1).click();
});

//Login user

test('Your username', async ({ page }) => {
  await page.goto('https://agentcars.com/es/login?redirect=/es/');
  await page.getByPlaceholder('Your Username').click();
  await page.getByPlaceholder('Your Username').fill('agencias');
  await page.getByPlaceholder('Your Username').press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('cars123');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('dialog').getByText('Autos').click();
  await page.getByText('Exit').click();
 
});
