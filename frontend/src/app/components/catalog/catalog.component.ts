import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  dataList: { "title": string; "description": string; "price": string; "distance": string; }[];

  constructor() {
    this.dataList=[{
      "title":"Chihuahua 650 int. 43",
      "description":"Departamento sin amueblar cerca del ITAM ) a 5 minutos"+ 
      "caminando, todos los servicios: "+
      "2 cuartos, baño completo, cocina, sala.",
      "price":"$5,500",
      "distance":"+6 minutos caminando"
    },
    {
      "title":"Frontera 16",
      "description":"Departamento amueblado con recamara compartida, cuenta "+
      "con servicios básicos. Muy buena iluminación, acogedora.",
      "price":"$4,000",
      "distance":"+10 minutos en auto"
    },
    {
      "title":"Morelos 72, int. 4",
      "description":"Departamento amueblado con recamaras individuales."+
      "Incluye servicios básicos.",
      "price":"$3,999",
      "distance":"+13 minutos caminando"
    }];
    
   }

  ngOnInit() {
  }

}
