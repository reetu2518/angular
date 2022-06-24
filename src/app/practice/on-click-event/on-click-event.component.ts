import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-click-event',
  templateUrl: './on-click-event.component.html',
  styleUrls: ['./on-click-event.component.css'],
})
export class OnClickEventComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  displayVal: string = '';
  disabled: boolean = true;
  show = true;
  color = 'green';
  title = "Input event";
  data = "get text box and display";

  getName(name: string, sec: string) {
    alert(name + ' ' + sec);
  }

  getVal(value: string) {
    console.log(value);
  }
  getVal2(value: string) {
    this.displayVal = value;
  }
}
