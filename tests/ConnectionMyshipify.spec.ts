import { test, expect } from '@playwright/test';


test('Connexion', async ({ page }) => {
await page.goto('https://sauce-demo.myshopify.com/');
//await page.getByRole('button', { name: 'Log In' }).click()
await page.getByText('Log In').click(); 

await page.locator('#customer_email').fill('awasaucedemo@yopmail.com');
await page.locator('#customer_password').fill('Passer@1');
await page.getByText('SIGN IN').click(); 

/*await page.getByLabel('Email').fill('genieouzog+atos@gmail.com');
await page.getByLabel('Mot de passe').fill('$Mossal1234');
await page.getByRole('button', { name: 'Se connecter' }).click();  */
  });



