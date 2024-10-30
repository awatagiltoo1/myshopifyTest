import { Inscriptionpage } from '../pages/Inscriptionpage';
import {test, expect } from '../utils/myTests';
import { Connexionpage } from '../pages/Connexionpage';




//test('@KAN-3 Inscription utilisateur', async ({ inscriptionpage, page}) => {
 // await inscriptionpage.goto();
 // await inscriptionpage.inscrireUser('Awa THIOUNE', 'awatestauto@yopmail.com', 'Passer@123', 'Mamadou', 'DIOP', 'Agiltoo', 'Ouest Foire', 'SENEGAL',  'Dakar', '17893',
  //      '778888888',  '6', '6', '1998');

//});


test('@KAN-8 Connexion utilisateur', async ({ connexionpage, page}) => {
  await connexionpage.goto();
  await connexionpage.ConnexionUser('awatestauto@yopmail.com', 'Passer@123');

});