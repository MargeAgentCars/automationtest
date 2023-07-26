import { test, expect } from '@playwright/test';
const{ chromium } = require('@playwright/test')

test('test', async ({ page }) => {
  await page.goto('https://agentcars.com/es/login?callbackUrl=https%3A%2F%2Fagentcars.com&error=undefined');
   await page.getByPlaceholder('Your Username').click();
  await page.getByPlaceholder('Your Username').fill('agencias');
  await page.getByPlaceholder('Your Username').press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('cars123');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('dialog').getByText('Autos').click();
  await page.locator('#overlay').click();
  await page.getByText('Exit').click();
  await page.getByPlaceholder('Lugar de recogida').click();
  await page.getByPlaceholder('Lugar de recogida').fill('sao paulo');
  await page.locator('a').filter({ hasText: 'São Paulo, Brasil (GRU-Aeropuerto Internacional Guarulhos - Governador Andre Fra' }).click();
  await page.getByRole('button', { name: 'Fecha de alquiler 2023-08-12' }).click();
  await page.locator('.float-right').first().click();
  await page.locator('.float-right').first().click();
  await page.locator('div:nth-child(10) > div:nth-child(6) > div > .px-2').first().click();
  await page.locator('div:nth-child(10) > div:nth-child(6) > div:nth-child(6) > .px-2').click();
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.getByText('Fiat Strada o similar').click();
});
