import { test, expect } from '@playwright/test';

const airports = [
  { city: 'Los Angeles, California', airport: 'Los Angeles Airport, Los Angeles, CA.'},
  { city: 'Madrid, Spain', airport: 'Madrid Barajas Airport, Madrid, SP.' },
  { city: 'Paris, France', airport: 'Charles de Gaulle Airport, Paris, FR.' },
  { city: 'Roma, Italy', airport: 'Roma Fiumicino Airport, Rome, IT.' },
  { city: 'Lima, Perú', airport: 'Lima - J Chavez International.' },
  { city: 'Buenos Aires, Argentina', airport: 'Buenos Aires, Ezeiza International Airprt.' },
  { city: 'Santiago de Chile, Chile', airport: 'Santiago de Chile - Arturo Merino Benitz.'},
  { airport: 'Hartsfield Jackson Airport, Atlanta, GA.'},
  { airport: 'O´Hare Airport, Chicago, IL.'},
  { airport: 'Dallas Airport, Dallas, TX.' },
  { airport: 'Denver Airport, Denver, CO.' },
  { airport: 'Frankfurt d el Meno Airport, Frankfurt,DE.' },
  { airport: 'Sao Paulo - Guarulhos International.' },
  { airport: 'JFK International Airport, New York City, NY.' },
  { airport: "Newark Liberty Int'l Airport, Newark, NJ" },
  { airport: "Kansas City Int'l Airport, Kansas City, MO"}
];
   

for(const {airport} of airports) {  
    test(`Airport: ${airport}`, async ({ page }) => {
    await page.goto('https://ohara-webapp.vercel.app/es');
    await page.getByRole('link', { name: `${airport}` }).click();

    //select dates
    await page.locator('#options-menu-pickup').click();
    await page.locator('#options-menu-pickup > div').click();
    await page.locator('#__nuxt').hover();
    await page.getByRole('aria-labelledby', {name: 'options-menu'}).isVisible()
    await page.waitForTimeout(5000)

    //move the calendar till next month
    await page.locator('.md\\:w-576 > div:nth-child(2)').click();
    await page.locator('div:nth-child(2) > div:nth-child(2) > .px-2').first().click();
    await page.waitForTimeout(3000)
    //await page.locator('span').filter({ hasText: 'Fecha de retorno' }).getByRole('class', { name: 'w-20' }).click();
    await page.locator('div').filter({ hasText: /^14151617181920$/ }).getByRole('button', { name: '20' }).click();
    await page.waitForTimeout(3000)
       
    await page.getByRole('button', { name: 'Buscar' }).click();

    await page.waitForTimeout(3000)
    
    //filter by the first three types
    await page.locator('#matrix1 > div.flex > div:nth-child(1)').click();
    await page.locator('#matrix1 > div.flex > div:nth-child(2)').click();
    await page.locator('#matrix1 > div.flex > div:nth-child(3)').click();
    await page.locator('#matrix1 > div.flex > div:nth-child(4)').click();  
    await page.locator('#matrix1 > div.flex > div:nth-child(5)').click();  
    await page.locator('#matrix1 > div.flex > div:nth-child(6)').click(); 

    await page.waitForTimeout(6000)

    
     
    //select a car
    await page.locator('//*[@id="Eco Friendly"]/div[2]/div[1]/div[1]/div[1]/div[5]').click()
    await page.locator('//*[@id="Economy Automatic"]/div[2]/div[1]/div[1]/div[1]/div[5]').click()

    //await page.locator('//*[@id="Economy Automatic"]/div[2]/div[1]/div[1]/div[2]/div[4]/div').scrollIntoViewIfNeeded();
    //await page.locator('//*[@id="Economy Automatic"]/div[2]/div[1]/div[1]/div[2]/div[4]/div').click()

    //pass to next page (page 3)

    //const page1 = await page1Promise; 
       
    
    });
  }