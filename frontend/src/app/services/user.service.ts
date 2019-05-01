import { Injectable } from '@angular/core';
// Se encarga de hacer el CRUD y otras operaciones del usuario con el servidor NODE
import { HttpClient } from '@angular/common/http'; 
import { Users } from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : Users;
  users: Users[];
  readonly URL_API = 'http://localhost:3000/api/users';

  // HttpClient is used to communicate with the backend server
  constructor(private http: HttpClient) { 
    this.user = new Users();
  }

  // Get all users
  getUsers(){
    return this.http.get(this.URL_API);
  }
 
  // Create User
  postUser(User: Users){
    return this.http.post(this.URL_API, User);
  }

  // Delete User
  deleteUser( _id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
