import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationsComponent } from './components/stations/stations.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { NewstationComponent } from './components/newstation/newstation.component';
import { MainComponent } from './components/main/main.component';
import { NewBikeComponent } from './components/newbike/newbike.component';


@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    BikesComponent,
    NewstationComponent,
    MainComponent,
    NewBikeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
