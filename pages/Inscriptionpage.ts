import type { Page, Locator } from '@playwright/test';
import { url } from 'inspector';

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
    readonly Day: Locator;
    readonly Month: Locator;
    readonly Years: Locator;
    readonly SubminInscBtm: Locator;


constructor(page: Page) { 
    this.page = page;
    this.InscriptionBtn = page.getByText(' Signup / Login'); 
    this.Complet = page.getByPlaceholder ('Name'); 
    this.Email1 = page.getByTestId('signup-email')
    this.SignupBtm = page.getByRole('button', { name: 'Signup' }); 
    this.GenreFeminin = page.locator('#id_gender2'); 
    this.Motdepasse = page.locator('#password'); 
    this.NewsletterCbx = page.getByLabel('Sign up for our newsletter!'); 
    this.OffersCbx = page.getByLabel('Receive special offers from our partners!'); 
    this.Prenom = page.locator('#first_name'); 
    this.Nom = page.locator('#last_name'); 
    this.Nom_Entreprise = page.locator('#company'); 
    this.Adresse1 = page.locator('#address1'); 
    this.Etat = page.locator('#state'); 
    this.Ville = page.locator('#city');  
    this.CodePostal = page.locator('#zipcode');
    this.Telephone = page.locator('#mobile_number'); 
    this.Day = page.getByTestId('days');
    this.Month = page.getByTestId('months');
    this.Years = page.getByTestId('years');
    //await page.getByText('Create Account').click();
    this.SubminInscBtm = page.getByText('Create Account');
            }
async inscrireUser(Complet: string, Email1: string, Motdepasse: string, Prenom: string, Nom: string,     Nom_Entreprise: string, Adresse1: string, Etat: string,  Ville: string, CodePostal: string, 
                Telephone: string,  Day: string, Month: string, Years: string) {
    await this.InscriptionBtn.click();
    await this.Complet.fill(Complet);
    await this.Email1.fill(Email1);
    await this.SignupBtm.click();
    await this.GenreFeminin.click();
    await this.Motdepasse.fill(Motdepasse);
    await this.NewsletterCbx.check();
    await this.OffersCbx.check();
    await this.Prenom.fill(Prenom);
    await this.Nom.fill(Nom);
    await this.Nom_Entreprise.fill(Nom_Entreprise);
    await this.Adresse1.fill(Adresse1);
    await this.Etat.fill(Etat); //await this.Etat.selectOption();
    await this.Ville.fill(Ville);
    await this.CodePostal.fill(CodePostal);
    await this.Telephone.fill(Telephone);
    await this.Day.selectOption(Day);
    await this.Month.selectOption(Month);
    await this.Years.selectOption(Years);
    await this.SubminInscBtm.click();
}

async goto(url: string ='/') {
    await this.page.goto(url);

}
}