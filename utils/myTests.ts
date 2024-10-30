import {test as base } from '@playwright/test';
import { Inscriptionpage } from '../pages/Inscriptionpage';
import { Connexionpage } from '../pages/Connexionpage';



type TestFixtures = {
    inscriptionpage: Inscriptionpage;
    connexionpage: Connexionpage;
  }
  
  export const test = base.extend<TestFixtures>({
    inscriptionpage: async ({ page }, use) => {
    const inscriptionpage = new Inscriptionpage(page);
    await inscriptionpage.goto();
      await use(inscriptionpage);
    },  


    connexionpage: async ({ page }, use) => {
      const connexionpage = new Connexionpage(page);
      await use(connexionpage);
  },


  })

  




export { expect } from '@playwright/test';