import { Bikes } from './bikes';

export class Stations {
    _id: string;
    name: string;
    state: string;
    description:string;  
    bikes;

    constructor(_id='',name ='', state = '', description ='', bikesArray: Array<Bikes> = []){
        this._id = _id;
        this.name = name;
        this.state = state;
        this.description = description;
        this.bikes =  bikesArray;
    }
}