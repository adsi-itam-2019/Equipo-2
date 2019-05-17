export class House {
    constructor( _id="",title="",precio=0,direccion="",servicios={},comentarios="",images=[]){
        this._id=_id;
        this.title=title,
        this.precio=precio,
        this.direccion=direccion,
        this.servicios=servicios,
        this.comentarios=comentarios, 
        this.images=images
    }
    _id:String; 
    title:String;
    precio:Number;
    direccion:String;
    servicios:{};
    comentarios:String; 
    images:String[];
  }
  
  