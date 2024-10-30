import type { Page, Locator } from '@playwright/test';
import { url } from 'inspector';

export class Connexionpage {
    readonly page: Page;
    readonly InscriptionBtn: Locator;   
    readonly EmailConnexion: Locator;   
    readonly MdpConnexion: Locator;
    readonly ConnecterBtm: Locator;


constructor(page: Page) { 
    this.page = page;
    this.InscriptionBtn = page.getByText(' Signup / Login'); 
    this.EmailConnexion = page.getByTestId('login-email');
    this.MdpConnexion = page.getByTestId('login-password');
    this.ConnecterBtm = page.getByRole('button', { name: 'Login' });
    // this.SignupBtm = page.getByRole('button', { name: 'Login' }); 
   
            }
async ConnexionUser(EmailConnexion: string, MdpConnexion: string) {
    await this.InscriptionBtn.click();
    await this.EmailConnexion.fill(EmailConnexion);
    await this.MdpConnexion.fill(MdpConnexion);
    await this.ConnecterBtm.click();
   
}

async goto(url: string ='/') {
    await this.page.goto(url);

}
}