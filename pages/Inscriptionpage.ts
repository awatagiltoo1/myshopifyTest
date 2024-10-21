import type { Page, Locator } from '@playwright/test';

export class Inscriptionpage {
    readonly page: Page;
    readonly InscriptionBtn: Locator;
    readonly Complet: Locator;
    readonly Email1: Locator;
    readonly SignupBtm: Locator;
    readonly GenreFeminin: Locator;
    readonly Motdepasse: Locator;
    readonly NewsletterCbx: Locator;
    readonly OffersCbx: Locator;
    readonly Prenom: Locator;
    readonly Nom: Locator;
    readonly Nom_Entreprise: Locator;
    readonly Adresse1: Locator;
    readonly Etat: Locator;
    readonly Ville: Locator;
    readonly CodePostal: Locator;
    readonly Telephone: Locator;


    constructor(page: Page) { 
        this.page = page;
        /*   this.email = page.getByPlaceholder('awafall@mossal.com');
        this.password = page.getByPlaceholder('entrer votre mot de passe');*/ 
        this.InscriptionBtn = page.getByText(' Signup / Login'); 
        this.Complet = page.getByPlaceholder ('NAwa THIOUNE'); 
        this.Email1 = page.locator('awatestauto@yopmail.com');
        this.SignupBtm = page.getByRole('button', { name: 'Signup' }); 
        this.GenreFeminin = page.locator('#id_gender2'); 
        this.Motdepasse = page.locator('Passer@123'); 
        this.NewsletterCbx = page.getByLabel('Sign up for our newsletter!'); 
        this.OffersCbx = page.getByLabel('Receive special offers from our partners!'); 
        this.Prenom = page.locator('Mamadou'); 
        this.Nom = page.locator('DIOP'); 
        this.Nom_Entreprise = page.locator('Agiltoo'); 
        this.Adresse1 = page.locator('Ouest Foire'); 
        this.Etat = page.locator('SENEGAL'); 
        this.Ville = page.locator('Dakar');  
        this.CodePostal = page.locator('17893'); 
        this.Telephone = page.locator('778888888'); 
            }

          /*  async InscriptionF(email: string,password:string) {
                await this.email.fill(email);
                await this.password.fill(password);
                await this.seSouvenirDeMoi.check();
                await this.loginButton.click();
            }*/
}