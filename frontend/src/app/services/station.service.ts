import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stations } from "../models/stations";
import { Environments } from "./environments"

@Injectable({
  providedIn: 'root'
})
export class StationService {
  environment: Environments;
  selectedBike: Stations; 

  constructor( private http: HttpClient) { 
    this.selectedBike = new Stations();
    this.environment = new Environments();
  }

  addStation(station: Stations) {
    return this.http.post(this.environment.urlStation + "/new " , station);
  }

  getStations(){
    return this.http.get<Stations[]>(this.environment.urlStation + "/getEstacions");
  }

  /*getBikes() { 
    return this.http.get<Bikes[]>(this.environment.urlBike + "/getBikes");
  }*/

  getStationById(_id: string){
    return this.http.get<Stations>(this.environment.urlStation + `/${_id}`);
  }

  deleteStation(_id: string){
    return this.http.delete(this.environment.urlStation + `/${_id}`)
  }

  //DeleteStation falta a station.js
  //getBikeFromStationById falta 

}
