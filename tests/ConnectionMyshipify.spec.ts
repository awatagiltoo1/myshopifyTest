import { test, expect } from '@playwright/test';


test('@KAN-3 Connexion', async ({ page }) => {
  //@KAN-1
  //test.only('@KAN-1 Ajout collaborateur', async ({ collaboratorPage, page}) =>
await page.goto('https://automationexercise.com/');
//await page.getByRole('button', { name: 'Log In' }).click()
//Email1
await page.getByText(' Signup / Login').click(); //bouton dinscription
await page.getByPlaceholder ('Name').fill('Awa THIOUNE'); //nom complet
await page.getByTestId('signup-email').fill('awatestauto@yopmail.com');

await page.getByRole('button', { name: 'Signup' }).click(); //signupBtm
await page.locator('#id_gender2').click(); //genreFeminin
await page.locator('#password').fill('Passer@123'); //motdepasse

await page.getByLabel('Sign up for our newsletter!').check(); //newsletterCbx
await page.getByLabel('Receive special offers from our partners!').check(); //offersCbx

//Saisie des champs

await page.locator('#first_name').fill('Mamadou'); //Prenom
await page.locator('#last_name').fill('DIOP'); //Nom
await page.locator('#company').fill('Agiltoo'); //Nom entreprise
await page.locator('#address1').fill('Ouest Foire'); //Adress1
await page.locator('#state').fill('SENEGAL'); //Etat
await page.locator('#city').fill('Dakar');  //Ville
await page.locator('#zipcode').fill('17893'); //Code postal
await page.locator('#mobile_number').fill('778888888'); //Telephone
//await page.getByTestId('days').selectOption({ value: '6' });
await page.getByTestId('days').selectOption({ value: '6' });
await page.getByTestId('months').selectOption({ value: '6' });
await page.getByTestId('years').selectOption({ value: '1998' });


//await page.locator('#Country').click();
//await page.getByText('India').click();
 

//await page.getByRole('button', { name: 'days' }).setChecked(true);

//await page.getByRole('button', { name: 'days' }).click(); 
//await page.getByText('Day').click(); 




//await page.getByTestId('Mrs').click();

/*await page.locator('#customer_email').fill('awasaucedemo@yopmail.com');
await page.locator('#customer_password').fill('Passer@1');
await page.getByText('SIGN IN').click({ timeout: 10000 }); 
//await expect(page.getByText('Account')).toBeVisible();
await page.getByText('Catalog').click(); */



  });



