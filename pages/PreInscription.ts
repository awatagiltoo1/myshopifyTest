import type { Page, Locator } from '@playwright/test';

export class Inscriptionpage {
    readonly page: Page;
    readonly InscriptionBtn: Locator;
    readonly Complet: Locator;
    readonly Email1: Locator;
    readonly SignupBtm: Locator;

    constructor(page: Page) { 
        this.page = page;
        /*   this.email = page.getByPlaceholder('awafall@mossal.com');
        this.password = page.getByPlaceholder('entrer votre mot de passe');*/ 
        this.InscriptionBtn = page.getByText(' Signup / Login'); 
        this.Complet = page.getByPlaceholder ('NAwa THIOUNE'); 
        this.Email1 = page.locator('awatestauto@yopmail.com');
        this.SignupBtm = page.getByRole('button', { name: 'Signup' }); 

            }
            async addCollaborator(Complet: string, Email1: string) {

                              await this.InscriptionBtn.click();
                              await this.Complet.fill(Complet);                        
                              await this.Email1.fill(Email1);
                              await this.SignupBtm.click;
                            
}
}