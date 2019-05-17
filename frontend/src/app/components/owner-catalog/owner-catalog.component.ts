import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-catalog',
  templateUrl: './owner-catalog.component.html',
  styleUrls: ['./owner-catalog.component.css']
})
export class OwnerCatalogComponent implements OnInit {
  dataList: { "title": string; "description": string; "price": string; "distance": string; "score": number; "image": string[]}[];


 
  constructor() {
    this.dataList=[{
      "title":"Frontera 16A",
      "description":"Cuarto para estudiante. Muy cerca del ITAM. "+ 
      "Incluye todos los servicios: internet, cocina, sala, agua caliente... SOLO SEÑORITAS",
      "price":"$5,500",
      "distance":"+8 minutos caminando",
      "score": 4.5,
      "image": ["assets\\img\\11.png"]
      
    },
    {
      "title":"Frontera 16B",
      "description":"Cuarto para estudiante. Muy cerca del ITAM. "+ 
      "Incluye todos los servicios: internet, cocina, sala, agua caliente... SOLO SEÑORITAS",
      "price":"$4,500",
      "distance":"+8 minutos caminando",
      "score": 3,
      "image": ["assets\\img\\22.png"]
    },
    {
      "title":"Frontera 16C",
      "description":"Cuarto para estudiante. Muy cerca del ITAM. "+ 
      "Incluye todos los servicios: internet, cocina, sala, agua caliente... SOLO SEÑORITAS",
      "price":"$4,500",
      "distance":"+8 minutos caminando",
      "score": 4,
      "image": ["assets\\img\\33.png"]
    },];
   }

  ngOnInit() {
  }

}
