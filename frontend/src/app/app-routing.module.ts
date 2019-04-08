import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationsComponent } from './components/stations/stations.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { MainComponent } from "./components/main/main.component";
import { NewstationComponent } from "./components/newstation/newstation.component";
import { NewBikeComponent } from "./components/newbike/newbike.component";

const routes: Routes = [

  {path: 'api/stations', component: StationsComponent},
  {path: 'api/station/:id', component: StationsComponent},
  {path: 'api/stations/1', component: NewBikeComponent},
  {path: 'api/stations/2', component: NewBikeComponent},
  {path: 'api/stations/3', component: NewBikeComponent},
  {path: 'api/stations/4', component: NewBikeComponent},



  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'api/stations/1', component: NewBikeComponent},
  {path: 'api/stations/2', component: NewBikeComponent},
  {path: 'api/stations/3', component: NewBikeComponent},
  {path: 'api/stations/4', component: NewBikeComponent},

  {path: 'api/add_station', component: NewstationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
