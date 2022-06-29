import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [],
})
export class PipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  twoWayBinding: any;

  public userName: string = 'two-way data binding using get and set methods';
  getName() {
    return this.userName;
  }
  setName(val: string) {
    console.log(val, '=>value of input');
    // this.userName = val;
  }

  /** Pipes */
  name = 'Rahul Sharma';
  today = new Date();
  user = {
    name : "ABC",
    email : "test@gmail.com"
  }
}
