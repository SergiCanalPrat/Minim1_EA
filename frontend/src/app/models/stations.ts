export class Stations {
    _id: string;
    name: string;
    state: string;
    description: string;  

    constructor(_id='',name ='', state = '', description =''){
        this.name = name;
        this.state = state;
        this.description = description;

    }
}