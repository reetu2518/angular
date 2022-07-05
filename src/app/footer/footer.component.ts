import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    ".footer{background-color: rgb(0, 0, 0);}"
  ]
})
export class FooterComponent implements OnInit {

  footerData:any;
  constructor(private data:UserdataService) {
    this.footerData = data.info;
   }

  ngOnInit(): void {
  }

}
