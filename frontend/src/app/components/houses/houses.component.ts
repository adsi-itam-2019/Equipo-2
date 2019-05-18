import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
  providers: [HouseService]
})
export class HousesComponent implements OnInit {

  constructor( public houseService: HouseService) { }

  ngOnInit() {
  }

}
