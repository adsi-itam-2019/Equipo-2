import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm, NgModel } from '@angular/forms';
import { Users } from '../../models/Users';
import { Router } from "@angular/router";

declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  
  
  constructor(private userService1: UserService, private router: Router) { }

  ngOnInit() {

    
  }

  logUser(form: NgForm){


    this.router.navigateByUrl('/catalog');

    //var pass = this.userService1.user.password;

    //M.toast({html: pass})

    //console.log("clicked");
        
    /*this.userService1.getUsers().subscribe(
      res=>{
        this.userService1.users = res as Users[];
        console.log(this.userService1.users);
       }
    );*/
  }
}
