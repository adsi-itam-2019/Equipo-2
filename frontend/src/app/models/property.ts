export class Property {
    _id: string;
    title:string;
    description:string;
    price:number;
    distance:number;

    constructor( _id='', title= '', description= '', price=0, distance = 0){
        this._id = _id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.distance = distance;

    }


}