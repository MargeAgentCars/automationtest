import { test, expect } from '@playwright/test';

test('Los Angeles Search', async ({ page }) => {
  await page.goto('https://ohara-webapp.vercel.app/es');
  await page.getByRole('link', { name: 'Los Angeles, California' }).click();
  await page.waitForTimeout(3000)
  await page.locator('#options-menu-pickup').click();
  
  await page.locator('#options-menu-pickup > div > span.w-20').click();
  
  
  await page.locator('div:nth-child(2) > div:nth-child(2) > .px-2').first().click();
  await page.locator('div').filter({ hasText: /^21222324252627$/ }).getByRole('button', { name: '27' }).click();

  
  await page.locator('#options-menu').click()
  await page.waitForTimeout(3000)
  //await page.locator('//*[@id="__nuxt"]/div/div[4]/div[2]/div[1]/div[2]/div/div/div/form/div/div/div[1]/div[2]/div[3]/div[2]/div[1]/div/p').click();
  await page.getByRole('button', { name: 'Buscar' }).click();

  await page.waitForTimeout(40000)
  
  await page.locator('#matrix1 > div.flex > div:nth-child(1) > img').hover();
  await page.locator('#matrix2 > div.w-full.md\:flex.w-2\/3 > div:nth-child(1) > button > span.text-base.font-medium.text-GRC0').hover();
  await page.locator('//*[@id="LAX"]/div[2]/div/div[1]/div[1]/div[5]/div[1]').hover();

  
  await page.locator('#LAX > div:nth-child(2) > div.relative.flex.flex-wrap > div:nth-child(1) > div.border-x.z-20.scale-\[0\.98\].border-transparent.duration-100.transition-all.flex.h-204.w-142.flex-wrap.content-between.justify-center.rounded-t.\!border-G300.shadow-matrix.\!scale-100.shadow-BRC0 > div:nth-child(4) > div').click();
  
  
  await page.getByPlaceholder('Your email').click();
  await page.getByPlaceholder('Your email').fill('margarita.taborda@agentcars.com');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Test LA');
  await page.getByPlaceholder('Phone').click();
  await page.getByPlaceholder('Phone').fill('300000000');
  await page.getByPlaceholder('City').click();
  await page.getByPlaceholder('City').fill('Bogota');
  await page.getByRole('button', { name: 'Enviar detalles' }).click();
  await page.getByText('En Unos Segundos Usted Recibirá Un Correo Con La Cotización Solicitada').click();


});