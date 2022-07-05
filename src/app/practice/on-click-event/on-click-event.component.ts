import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-on-click-event',
  templateUrl: './on-click-event.component.html',
  styleUrls: ['./on-click-event.component.css'],
})
export class OnClickEventComponent implements OnInit {
  dynamicId:any = '';
  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.dynamicId = this.route.snapshot.paramMap.get('id');
    console.log("user id: ", this.route.snapshot.paramMap.get('id'));
  }

  displayVal: string = '';
  disabled: boolean = true;
  show = true;
  color = 'green';
  title = 'Input event and Send Data child to parent component';
  data = 'get text box and display';

  @Input() item = 0;

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
