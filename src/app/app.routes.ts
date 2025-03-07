import { Routes } from '@angular/router';
import { PuertosOnlineComponent } from './components/Webs/puertos-online/puertos-online.component';
import { CerealNetComponent } from './components/Webs/cereal-net/cereal-net.component';
import { WoodSummonerComponent } from './components/Webs/wood-summoner/wood-summoner.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DisenoComponent } from './components/Dg/diseno/diseno.component';

export const routes: Routes = [

  { path: 'inicio', component: InicioComponent },
  { path: 'puertos-online', component: PuertosOnlineComponent },
  { path: 'cerealnet', component: CerealNetComponent },
  { path: 'woodsummoner', component: WoodSummonerComponent },
  { path: 'diseño', component: DisenoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' } 

];
