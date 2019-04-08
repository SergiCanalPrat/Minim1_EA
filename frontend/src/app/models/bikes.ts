export class Bikes {
    _id: string;
    name: string;
    kms: number;
    description: string //Array<String>;

    constructor(_id: string ='',name: string ='', kms: number = null, description: string =''/*phoneArray: Array<String> = []*/){
        this._id = _id;
        this.name = name;
        this.kms = kms;
        this.description = description;
        //this.phone = phoneArray;
    }

}
