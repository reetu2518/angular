import { Component } from '@angular/core';
import { UserdataService } from './service/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  headerInfo:any;
  constructor(private dataa:UserdataService) {
    this.headerInfo = dataa.info;
  }

  data = 10;
  updateVal() {
    this.data = Math.floor(Math.random()*10);
  }

  users = [
    {
      name: 'abc',
      email: 'test@gamil.com',
      mobile: 989898,
      hobby: ['a', 'b', 'c'],
    },
    {
      name: 'abcd',
      email: 'test@gasamil.com',
      mobile: 2423,
      hobby: ['d', 'e', 'c'],
    },
    {
      name: 'adc',
      email: 'test@gamasdil.com',
      mobile: 2342,
      hobby: ['h', 'gb', 'f'],
    },
  ];


}