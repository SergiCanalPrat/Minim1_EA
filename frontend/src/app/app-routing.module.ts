import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationsComponent } from './components/stations/stations.component';
import { BikesComponent } from './components/bikes/bikes.component';

const routes: Routes = [

  { path: 'api/bike/:id', component: BikesComponent },
  { path: 'api/station', component: StationsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
