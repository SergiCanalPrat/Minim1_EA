import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationslistComponent } from './components/stationslist/stationslist.component';
import { BikeslistComponent } from './components/bikeslist/bikeslist.component';

const routes: Routes = [

  { path: '', redirectTo: '/stationlist', pathMatch: 'full' },
  { path: 'bike/:id', component: BikeslistComponent },
  { path: 'station', component: StationslistComponent }
  //{ path: 'api/relacion/add/:id', component: BikesaddComponent },
  //{ path: 'api/relacion/delete/:id', component: BikedeleteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
