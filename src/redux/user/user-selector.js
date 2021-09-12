 import { createSelector } from 'reselect';


 const izaberiUsera = kontejner => kontejner.user;


 export const izberiTrenutnogUsera = createSelector(
     [izaberiUsera],
     user => user.trenutniKorisnik

 );
