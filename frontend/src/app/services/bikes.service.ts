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
    this.selectedBike = new Bikes("",null,"");
    this.environment = new Environments();
   }
   //recoger los datos en http 
   
  getBikes() {
    return this.http.get(this.environment.urlBike);
  }

  getBikeById(_id: string) {
    return this.http.get(this.environment.urlBike + `/${_id}`);
  }

  addBike(bike: Bikes) {
    return this.http.post(this.environment.urlBike + "/new", bike)
  }

  deleteBike(_id: string){
    return this.http.delete(this.environment.urlBike + `/eliminar/${_id}`)
  }  
}
