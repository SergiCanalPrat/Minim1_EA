import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stations } from "../models/stations";
import { Environments } from "./environments"
import { Bikes } from '../models/bikes';
import { Observable } from 'rxjs';

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
    return this.http.post(this.environment.urlStation + "new " , station);
  }

  getStations():Observable<Stations[]> {
    return this.http.get<Stations[]>(this.environment.urlStation);
  }

  getBikes():Observable<Bikes[]> { 
    return this.http.get<Bikes[]>(this.environment.urlBike + "/getBikes");
  }

  getStation(_id: string){
    return this.http.get<Stations>(this.environment.urlStation + `/${_id}`);
  }

  deleteStation(_id: string){
    return this.http.delete(this.environment.urlStation + `/${_id}`)
  }

}
