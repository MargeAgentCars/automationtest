import { test, expect } from '@playwright/test';

test('Honolulu Search', async ({ page }) => {
  await page.goto('https://agentcars.com/es/login?redirect=/es/matrix?lat=0&latDropOff=0&lng=0&lngDropOff=0&dropOffDate=2023-10-08&dropOffHour=1200&dropOffLocation=LAX&pickUpDate=2023-09-25&pickUpHour=1200&pickUpLocation=LAX&rateType=1&source=CO&country=US&timezone=America/New_York&pickUpAddress=Los+%C3%81ngeles,+CA,+Estados+Unidos+(LAX-A.+Internacional+de+Los+%C3%81ngeles),+LAX&dropOffAddress=Los+%C3%81ngeles,+CA,+Estados+Unidos+(LAX-A.+Internacional+de+Los+%C3%81ngeles),+LAX');

  await page.getByPlaceholder('Your Username').click();
  await page.getByPlaceholder('Your Username').fill('agencias');
  await page.getByPlaceholder('Your Username').press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('cars123');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('dialog').getByText('Autos').click();
  await page.getByPlaceholder('Lugar de recogida').click();
  await page.getByPlaceholder('Lugar de recogida').fill('honolulu');
  await page.locator('a').filter({ hasText: 'Honolulú, HI,, Estados Unidos (HNL-Daniel K. Inouye Intl.), HNL' }).click();
  await page.getByRole('button', { name: 'Fecha de alquiler 2023-10-16' }).click();
  await page.locator('.float-right').first().click();
  await page.locator('.float-right').first().click();
  await page.locator('div:nth-child(10) > div:nth-child(6) > div > .px-2').first().click();
  await page.locator('.float-right').first().click();
  await page.locator('div').filter({ hasText: /^2345678$/ }).getByRole('button', { name: '8' }).click();
  await page.getByRole('button', { name: 'Mejor Tarifa' }).click();
  await page.getByText('Basic Rate with Mandatory Taxes and Fees').click();
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.locator('div').filter({ hasText: /^Eco Friendly ── desde ── USD831\.99$/ }).locator('img').click();
});