import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RxwebValidators,RxFormBuilder } from "@rxweb/reactive-form-validators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  formdata: any;
  email: any;
  constructor( private formBuilder: RxFormBuilder) { }

  ngOnInit() {
  }

}
