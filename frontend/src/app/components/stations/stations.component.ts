import { Component, OnInit } from '@angular/core';
import {StationService} from "../../services/station.service";
import {BikesService} from "../../services/bikes.service";

import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import { Stations } from "../../models/stations"
import { Bikes } from 'src/app/models/bikes';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
stations: Stations[];
bikeList: Bikes[];

  constructor(private router: Router, private bikesService: BikesService, private stationService: StationService){

  }
  ngOnInit() {
   this.listaStations();

  }

  listaStations(){
    this.stationService.getStations()
    .subscribe( res =>{
      
      this.stations = res;
      console.log ("List of the stations: " , this.stations)
    });

  }

  getBikes(){
    this.bikesService.getBikes()
    .subscribe( res =>{

      this.bikeList = res;
      console.log ("List of the bikes: " , this.bikeList)
    });
  }
 

 
}