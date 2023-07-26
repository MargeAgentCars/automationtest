import { test, expect } from '@playwright/test';

test('Basic Search', async ({ page }) => {
  //await page.goto('https://rentingcarz.com/en');
  await page.goto('https://ohara-webapp.vercel.app/es/');
  await page.getByPlaceholder('Lugar de recogida').click();
  await page.getByPlaceholder('Lugar de recogida').fill('París, Francia (CDG-Aeropuerto Roissy-Charles de Gaulle), CDG');

  await page.waitForTimeout(3000)
  await page.locator('#options-menu-pickup').click();

  await page.locator('#options-menu-pickup > div > span.w-20').click();

  await page.locator('div:nth-child(2) > div:nth-child(2) > .px-2').first().click();
  await page.locator('div').filter({ hasText: /^21222324252627$/ }).getByRole('button', { name: '27' }).click();

  await page.locator('#options-menu').click()
  await page.waitForTimeout(3000)
 
  await page.locator('#pickUpHour').click();
  await page.locator('//*[@id="__nuxt"]/div/div[4]/div[1]/div/div/div/div[2]/form/div/div/div[1]/div[2]/div[1]/div/div[2]/div/div/ul/li[21]').click();

  
  await page.locator('#dropOffHour').click();
  await page.locator('//*[@id="__nuxt"]/div/div[4]/div[1]/div/div/div/div[2]/form/div/div/div[1]/div[2]/div[2]/div/div[2]/div/div/ul/li[28]').click()
  
  
  await page.locator('#options-menu').click();
  await page.waitForTimeout(3000)
  await page.locator('class=block px-4 py-2 text-sm text-gray-700').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Renault Twingo or similarUSD395.39').click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(4) > .relative > div:nth-child(4) > .mx-auto').first().click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Book Now' }).click();
  await page1.getByText('Change Search').first().click();
  await page1.getByText('Drop-off at another location').click();
  await page1.getByPlaceholder('Drop-off Location').click();
  
  await page1.getByPlaceholder('Drop-off Location').fill('ile');
  await page1.locator('a').filter({ hasText: 'La Rochelle - Ile de Re Airport, LRH, France' }).click();
  await page1.getByRole('button', { name: 'Search' }).click();
  await page1.locator('html').click();
});