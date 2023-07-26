import { test, expect } from '@playwright/test';

test.skip('Reservation Search', async ({ page }) => {
  //await page.goto('https://rentingcarz.com/es');
  await page.goto('https://ohara-webapp.vercel.app/es/');
  await page.locator('div').filter({ hasText: 'Mi Reservación' }).click();
  await page.getByPlaceholder('Apellido del conductor').click();
  await page.getByPlaceholder('Apellido del conductor').fill('Test');
  await page.getByPlaceholder('Número de confirmación').click();
  await page.getByPlaceholder('Número de confirmación').fill('678462387');
  await page.getByText('Buscar').first().click();
});