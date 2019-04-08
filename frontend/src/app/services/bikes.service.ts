import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Bikes } from "../models/bikes";
import { Environments } from "./environments"


@Injectable({
  providedIn: 'root'
})
export class BikesService {  
  environment: Environments;
  selectedBike: Bikes; 

  constructor( private http: HttpClient) {
    this.selectedBike = new Bikes("","",null,"");
    this.environment = new Environments();
   }
   //recoger los datos en http 
   
   addBike(bike: Bikes) {
    return this.http.post(this.environment.urlBike + "nuevo", bike)
  }
   
}
