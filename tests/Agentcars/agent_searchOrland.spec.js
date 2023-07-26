import { test, expect } from '@playwright/test';

test('Orlando Search', async ({ page }) => {
await page.goto('https://agentcars.com/es/login?callbackUrl=https%3A%2F%2Fagentcars.com&error=undefined');
  await page.getByPlaceholder('Your Username').click();
  await page.getByPlaceholder('Your Username').fill('agencias');
  await page.getByPlaceholder('Your Username').press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('cars123');
  await page.getByRole('button', { name: 'Sign In' }).click();
 
  await page.getByRole('dialog').getByText('Cars').click();
  await page.getByPlaceholder('Pick-up Location').click();
  await page.getByPlaceholder('Pick-up Location').fill('orlando');
  await page.locator('a').filter({ hasText: 'Orlando, FL, United States of America (MCO-Orlando Intl.), MCO' }).click();
  await page.getByRole('button', { name: 'Pick-up Date 2023-09-16' }).click();
  await page.locator('.float-right').first().click();
  await page.locator('.float-right').first().click();
  await page.locator('div:nth-child(10) > div:nth-child(3) > div > .px-2').first().click();
  await page.locator('div:nth-child(10) > div:nth-child(4) > div:nth-child(7) > .px-2').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('div:nth-child(2) > div:nth-child(2) > div > div > .border-x > div:nth-child(5) > .w-full > .flex').first().click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(3) > div:nth-child(2) > div > div > .relative > div:nth-child(4) > .mx-auto').first().click();
  const page1 = await page1Promise;
});