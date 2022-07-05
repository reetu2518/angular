import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: [],
})
export class FormsComponent implements OnInit {
  // saveDataInPostApi(data: any) {
  //   return this.http.createPost(data).subscribe((result)=>{
  //     console.warn(result);
  //   });
  // }

  apiData: any;
  constructor(private data: UserdataService) {
    data.posts().subscribe((info: any) => {
      this.apiData = info;
    });
    
  }

  ngOnInit(): void {}

  userLogin(item: any) {
    // console.log(item);
    this.data.createPost(item).subscribe((result:any)=>{
      console.log(result);      
    });
  }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    // email : new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z]+$')]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
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
