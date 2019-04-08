import { Component, OnInit } from '@angular/core';
import {StationService} from "../../services/station.service";
import {Router} from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import { Stations } from "../../models/stations"

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
stations: Stations[];
stationId: string;
detallesForm: FormGroup;
detalle: Stations; 

  constructor(private router: Router, private formBuilder: FormBuilder, private stationService: StationService){

  }
  ngOnInit() {
   this.listaStations();
  }

  listaStations(){
    console.log ("List of the stations: " , this.stations)
    this.stationService.getStations()
    .subscribe( res =>{
      
      this.stations = res;
      console.log ("List of the stations: " , this.stations)
    });

  }

  stationdetalle(){
    console.log("Station details")
    this.stationId = this.detallesForm.value.stationId;
    this.stationService.getStation(this.stationId).subscribe(
      res => {
        console.log(res)
        this.detalle = res 
      });

  }
 

 
}