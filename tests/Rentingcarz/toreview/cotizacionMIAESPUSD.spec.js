import { test, expect } from '@playwright/test';

test('Miami Search', async ({ page }) => {
  await page.goto('https://ohara-webapp.vercel.app/es/');
  await page.getByRole('link', { name: 'Miami, Florida' }).click();
  await page.waitForTimeout(3000)
  await page.locator('#options-menu-pickup').click();

  await page.locator('#options-menu-pickup > div > span.w-20').click();

  await page.locator('div:nth-child(2) > div:nth-child(2) > .px-2').first().click();
  await page.locator('div').filter({ hasText: /^21222324252627$/ }).getByRole('button', { name: '27' }).click();

  await page.locator('#options-menu').click()
 
  //await page.locator('div').filter({ hasText : /^Solo Carros$/}).click()
  await page.waitForTimeout(3000)

  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.waitForTimeout(30000)

  await page.locator('#ICAHACICAH').check();
  await page.locator('#ECARWHECAR').check();
  await page.getByPlaceholder('Your email').click();
  await page.getByPlaceholder('Your email').fill('margarita.taborda@agentcars.com');
  await page.getByPlaceholder('Your email').press('Tab');
  await page.getByPlaceholder('Full Name').fill('Test test');
  await page.getByPlaceholder('Phone').click();
  await page.getByPlaceholder('Phone').fill('3000000000');
  await page.getByPlaceholder('City').click();
  await page.getByPlaceholder('City').fill('Bogota');
  await page.getByRole('button', { name: 'Enviar detalles' }).click();
});