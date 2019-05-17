import { Component, OnInit } from '@angular/core';
import { NgForm }  from '@angular/forms';
import { Router } from '@angular/router';


declare var M: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
    const elem = document.querySelector('.tabs');
    const options= {};
    M.Tabs.init(elem, options);
  }

  register(form: NgForm){
    this.router.navigateByUrl('/');
  }

}
