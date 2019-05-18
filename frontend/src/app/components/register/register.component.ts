import { Component, OnInit } from '@angular/core';
import { NgForm }  from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  constructor( public userService1: UserService, private router: Router) { }

  ngOnInit() {
    const elem = document.querySelector('.tabs');
    const options= {};
    M.Tabs.init(elem, options);
  }

  register(form: NgForm){
    this.router.navigateByUrl('/');
  }

}
