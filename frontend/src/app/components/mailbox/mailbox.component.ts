import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {

  dataListUnread: { "name": string; "body": string; "date": string; }[];
  dataListRead: { "name": string; "body": string; "date": string; }[];
  constructor() { 
    this.dataListUnread=[{
      "name":"Mario Casas",
      "body":"Buenas tardes: Me pongo en contacto con usted para agrendar una visita...",
      "date":"14/05/2019"      
    },
    {
      "name":"Cesar Mazo",
      "body":"Hola, te escribo porque me interesa el cuarto que estas anunciando...",
      "date":"09/05/2019"      
    },
    {
      "name":"Laura Guadarrama",
      "body":"Buenos días, tengo una duda con el depa que estás ofreciendo en...",
      "date":"09/05/2019"      
    }];
    this.dataListRead=[{
      "name":"Federico Esponda",
      "body":"Hola: Quisiera saber cuánto es lo mínimo por el cuarto en Frontera",
      "date":"03/05/2019"      
    },
    {
      "name":"Andrés Gomez",
      "body":"el departamento de chihuahua 650 tiene baño completo? no me quedó claro",
      "date":"01/05/2019"      
    }];
  }

  ngOnInit() {
  }

}
