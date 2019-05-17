import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {House} from '../models/house';

@Injectable({
  providedIn: 'root'
}) 
export class HouseService {
  selectedHouse: House;
  houses:House[]; 
  readonly URL_API='http://localhost:3000/api/houses';
  constructor(private http: HttpClient){}
  getHouses(){
    return this.http.get(this.URL_API);
  }
  postHouse(house: House){
    return this.http.post(this.URL_API,house);
  }
  putHouse(house: House){
    return this.http.post(this.URL_API+`/${house._id}`,house);
  }
  deleteHouse(_id:string){
    return this.http.delete(this.URL_API+'/${_id}');
  }
}