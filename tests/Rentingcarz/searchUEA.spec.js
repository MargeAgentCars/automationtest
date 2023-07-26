import { test, expect } from '@playwright/test';

const ciudades = [ 
      {
        city: "Los Angeles, California",
        iso: "LAX"
      },
      {
        city: "Miami, Florida",
        iso: "MIA"
      },
      {
        city: "San Francisco, California",
        iso: "SFO"
      },
      {
        city: "Orlando, Florida",
        iso: "ORL"
      },
      {
        city: "Las Vegas, Nevada",
        iso: "LAS"
      },
      {
        city: "Dallas, Texas",
        iso: "DAL"
      },
      {
        city: "Santorini, Greece",
        iso: "SAN"
      },
      {
        city: "Toronto, Canada",
        iso: "TOR"
      },
      {
        city: "Honolulu, Hawaii",
        iso: "HNL"
      },
      {
        city: "Madrid, Spain",
        airport: "Madrid Barajas Airport, Madrid, SP.",
        iso: "MAD"
      },
      {
        city: "Paris, France",
        airport: "Charles de Gaulle Airport, Paris, FR.",
        iso: "CDG"
      },
      {
        city: "Barcelona, Spain",
        iso: "BCN"
      },
      {
        city: "Roma, Italy",
        airport: "Roma Fiumicino Airport, Rome, IT.",
        iso: "ROM"
      },
      {
        city: "Lisboa, Portugal",
        iso: "LIS"
      },
      {
        city: "Bogotá, Cundinamarca",
        iso: "BOG"
      },
      {
        city: "Cartagena de Indias, Bolivar",
        iso: "CTG"
      },
      {
        city: "Medellín, Antioquia",
        iso: "MDE"
      },
      {
        city: "Cali, Valle del Cauca",
        iso: "CLO"
      },
      {
        city: "Santa Marta, Magdalena",
        iso: "SMR"
      },
      {
        city: "Lima, Perú",
        airport: "Lima - J Chavez International.",
        iso: "LIM"
      },
      {
        city: "Ciudad de Panamá, Panamá",
        iso: "PTY"
      },
      {
        city: "Buenos Aires, Argentina",
        airport: "Buenos Aires, Ezeiza International Airprt.",
        iso: "EZE"
      },
      {
        city: "Rio de Janeiro, Brazil",
        iso: "RIO"
      },
      {
        city: "Santiago de Chile, Chile",
        airport: "Santiago de Chile - Arturo Merino Benitz.",
        iso: "SCL"
      },
      {
        city: "San Jose, Costa Rica",
        iso: "SJO"
      },
      {
        city: "Cancun, Mexico",
        iso: "CUN"
      },
      {
        city: "Vancouver, Canada",
        iso: "YVR"
      },
      {
        city: "Washington, EE. UU.",
        iso: "DCA"
      },
      {
        city: "Tegucigalpa, Honduras",
        iso: "TGU"
      },
      {
        city: "Okinawa, Japón",
        iso: "OKA"
      },
      {
        city: "Sydney, Australia",
        iso: "SYD"
      },
      {
        city: "Dubai, United Arab Emirates",
        iso: "DXB"
      },
      {
        city: "Berlin, Germany",
        iso: "BER"
      },
      {
        city: "San Francisco, California",
        iso: "SFO"
      },
      {
        city: "London, United Kingdom",
        iso: "LON"
      }      
    ];      

   const URL = 'https://ohara-webapp.vercel.app/es'

for(const {city} of ciudades) {                
  test(`Search ${city}`, async ({ page }) => {
    await page.goto(`${URL}`);
    await page.waitForTimeout(3000)
    await page.getByRole('link', { name: `${city}` }).click();
    await page.waitForTimeout(3000)
    //dates selection
    await page.locator('#options-menu-pickup').click();
    await page.locator('.md\\:w-576 > div:nth-child(2)').click();
    await page.locator('div:nth-child(2) > div:nth-child(2) > .px-2').first().click();
    await page.locator('div').filter({ hasText: /^14151617181920$/ }).getByRole('button', { name: '20' }).click();
    await page.waitForTimeout(3000)
    await page.locator('#options-menu').isEnabled();
    
    await page.getByRole('button', { name: 'Buscar' }).click();
    await page.waitForTimeout(3000)

    //Search results: Verify elements existence

    await page.locator("#matrix1").isVisible();

    await page.locator('//*[@id=\"__nuxt\"]/div/div[4]/div/div[3]/div[3]/div/div[4]').scrollIntoViewIfNeeded()
    await page.locator('.border-x > div:nth-child(4) > .flex').first().isVisible();
   

    await page.locator('.border-x > div:nth-child(4) > .flex').first().hover()
    await page.locator('.border-x > div:nth-child(4) > .flex').first().click()

    
    //select a car

    
  });
}

