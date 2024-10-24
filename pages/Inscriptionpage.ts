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
    readonly Day: Locator;
    readonly Month: Locator;
    readonly Years: Locator;


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
        this.Day = page.getByTestId('days');
        this.Month = page.getByTestId('months');
        this.Years = page.getByTestId('years');
            }
            async addCollaborator(InscriptionBtn: string, Complet: string, Email1: string, SignupBtm: string,  GenreFeminin: string, Motdepasse: string, NewsletterCbx: string,
                OffersCbx: string, Prenom: string, Nom: string,     Nom_Entreprise: string, Adresse1: string, Etat: string,  Ville: string, CodePostal: string, 
                Telephone: string,  Day: string, Month: string, Years: string) {
                              await this.InscriptionBtn.click();
                              await this.Complet.fill(Complet);
                              await this.Email1.fill(Email1);
                              await this.SignupBtm.fill(SignupBtm);
                              await this.GenreFeminin.click();
                              await this.Motdepasse.fill(Motdepasse);
                              await this.NewsletterCbx.fill(NewsletterCbx);
                              await this.OffersCbx.fill(OffersCbx);
                              await this.Prenom.fill(Prenom);
                              await this.Nom.fill(Nom);
                              await this.Nom_Entreprise.fill(Nom_Entreprise);
                              await this.Adresse1.fill(Adresse1);
                              //await this.Adresse1.selectOption({ index: 0 });
                              await this.Etat.fill(Etat); //await this.Etat.selectOption();
                              await this.Ville.fill(Ville);
                              await this.CodePostal.fill(CodePostal);
                              await this.Telephone.fill(Telephone);
                              await this.Day.selectOption({value: '6'});
                              await this.Month.selectOption({value: '6'});
                              await this.Years.selectOption({ value: '1998'});
}}