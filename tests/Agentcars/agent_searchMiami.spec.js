import { test, expect } from '@playwright/test';
const{ chromium } = require('@playwright/test')

test('Miami Search', async ({ page }) => {
  await page.goto('https://agentcars.com/es/login?callbackUrl=https%3A%2F%2Fagentcars.com&error=undefined');
  await page.getByPlaceholder('Your Username').click();
  await page.getByPlaceholder('Your Username').fill('agencias');
  await page.getByPlaceholder('Your Username').press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('cars123');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('dialog').getByText('Autos').click();
  await page.getByText('Exit').click();
  await page.getByPlaceholder('Lugar de recogida').click();
  await page.getByPlaceholder('Lugar de recogida').fill('miami');
  await page.locator('a').filter({ hasText: 'Miami, FL, Estados Unidos (MIA-A. Internacional de Miami), MIA' }).click();
  await page.getByRole('button', { name: 'Fecha de alquiler 2023-08-16' }).click();
  await page.locator('.float-right').first().click();
  await page.locator('div').filter({ hasText: /^21222324252627$/ }).getByRole('button', { name: '26' }).click();
  await page.locator('div:nth-child(7) > div:nth-child(6) > div:nth-child(4) > .px-2').click();
  await page.getByRole('button', { name: 'Selecciona Tarifa' }).click();
  await page.getByText('Basic Rate with Mandatory Taxes and Fees').click();
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.locator('div').filter({ hasText: /^Eco Friendly ── desde ── USD316\.26$/ }).locator('img').click();
});