import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  dataList: { "title": string; "description": string; "price": string; "distance": string; "score": number; "image": string[]}[];

  constructor() {
    this.dataList=[{
      "title":"Chihuahua 650 int. 43",
      "description":"Departamento sin amueblar cerca del ITAM ) a 5 minutos "+ 
      "caminando, todos los servicios: "+
      "2 cuartos, baño completo, cocina, sala.",
      "price":"$5,500",
      "distance":"+6 minutos caminando",
      "score": 4.5,
      "image": ["assets\\img\\1.png"]
      
    },
    {
      "title":"Frontera 16",
      "description":"Departamento amueblado con recamara compartida, cuenta "+
      "con servicios básicos. Muy buena iluminación, acogedora.",
      "price":"$4,000",
      "distance":"+10 minutos en auto",
      "score": 3,
      "image": ["assets\\img\\2.png"]
    },
    {
      "title":"Morelos 72, int. 4",
      "description":"Departamento amueblado con recamaras individuales."+
      "Incluye servicios básicos.",
      "price":"$3,999",
      "distance":"+13 minutos caminando",
      "score": 4,
      "image": ["assets\\img\\3.png"]
    },{
      "title":"Guerraro 16A",
      "description":"Departamento amueblar cerca del ITAM "+ 
      ", todos los servicios: "+
      "1 cuarto, baño completo, cocina y sala.",
      "price":"$5,500",
      "distance":"+6 minutos caminando",
      "score": 3.5,
      "image": ["assets\\img\\2.png"]
    },{
      "title":"Frontera 68",
      "description":"Cuarto para estudiantes amueblado con"+ 
      "todos los servicios: ",
      "price":"$5,500",
      "distance":"+8 minutos caminando",
      "score": 5,
      "image": ["assets\\img\\1.png"]
    },{
      "title":"Colima 32",
      "description":"Cuarto con todos los servicios para "+ 
      "estudiantes del ITAM. ",
      "price":"$5,500",
      "distance":"+9 minutos caminando",
      "score": 3.5,
      "image": ["assets\\img\\2.png"]
    },{
      "title":"Michoacán 8",
      "description":"Cuarto sin amueblar. Con todos los sericios."+ 
      "OXXO a 2 min caminando. ",
      "price":"$5,500",
      "distance":"+12 minutos caminando",
      "score": 4.5,
      "image": ["assets\\img\\3.png"]
    },{
      "title":"Hidalgo 43",
      "description":"Cuarto dentro de departamento compartido."+ 
      " Con todos los servicios. Limpieza una vez a la semana.",
      "price":"$5,500",
      "distance":"+15 minutos caminando",
      "score": 5,
      "image": ["assets\\img\\2.png"]
    },];
   }

  ngOnInit() {
  }

}
