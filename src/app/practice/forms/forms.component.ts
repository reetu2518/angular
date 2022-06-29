import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: [
  ]
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userLogin(item:any) {
    console.log(item);    
  }
  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    // email : new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z]+$')]),
    password : new FormControl('', [Validators.required, Validators.minLength(5)]),
  })
  loginUser() {
    console.log(this.loginForm.value);
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
