import {test as base } from '@playwright/test';
import { Inscriptionpage } from '../pages/Inscriptionpage';



type TestFixtures = {

    Inscriptionpage: Inscriptionpage;
}

export const test = base.extend<TestFixtures>({
    Inscriptionpage: async ({ page }, use) => {
   // const Inscriptionpage = new Inscriptionpage(page);
   // await use(Inscriptionpage);
    },
})