import { test, expect } from '@playwright/test';

test('Fort Lauderdale Search', async ({ page }) => {
  await page.goto('https://agentcars.com/en/login?redirect=/en/matrix?lat=0&latDropOff=0&lng=0&lngDropOff=0&dropOffDate=2023-09-17&dropOffHour=1200&dropOffLocation=MCO&pickUpDate=2023-09-04&pickUpHour=1200&pickUpLocation=MCO&rateType=best&source=CO&country=US&timezone=America/New_York&pickUpAddress=Orlando,+FL,+United+States+of+America+(MCO-Orlando+Intl.),+MCO&dropOffAddress=Orlando,+FL,+United+States+of+America+(MCO-Orlando+Intl.),+MCO');
  await page.goto('https://agentcars.com/es/login?callbackUrl=https%3A%2F%2Fagentcars.com%2Fen%2F&error=undefined');
  await page.getByPlaceholder('Your Username').click();
  await page.getByPlaceholder('Your Username').fill('agencias');
  await page.getByPlaceholder('Your Username').press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('cars123');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('dialog').getByText('Autos').click();
  await page.getByPlaceholder('Lugar de recogida').click();
  await page.getByPlaceholder('Lugar de recogida').fill('fort lauderdale');
  await page.locator('a').filter({ hasText: 'Fort Lauderdale, FL, Estados Unidos (FLL-A. Internacional de Fort Lauderdale - H' }).click();
  await page.getByRole('button', { name: 'Fecha de alquiler 2023-09-16' }).click();
  await page.locator('.float-right').first().click();
  await page.locator('.float-right').first().click();
  await page.locator('div:nth-child(10) > div:nth-child(6) > div > .px-2').first().click();
  await page.locator('div:nth-child(10) > div:nth-child(6) > div:nth-child(6) > .px-2').click();
  await page.getByRole('button', { name: 'Mejor Tarifa' }).click();
  await page.getByText('Basic Rate with Mandatory Taxes and Fees').click();
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.getByRole('dialog').getByRole('img').click();
  await page2.goto('https://agentcars.com/es/reservation/RkxMMjAyMy0wOS0yNTEyMDBGTEwyMDIzLTA5LTMwMTIwMFpFQ08xSkNBRQ==?lat=0&latDropOff=0&lng=0&lngDropOff=0&dropOffDate=2023-09-30&dropOffHour=1200&dropOffLocation=FLL&pickUpDate=2023-09-25&pickUpHour=1200&pickUpLocation=FLL&rateType=1&source=CO&country=US&timezone=America/New_York&sippCode=JCAE&companyCode=ZE&ccrc=WkU=');
});