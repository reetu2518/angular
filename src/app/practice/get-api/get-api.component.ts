import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/service/userdata.service';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetAPIComponent implements OnInit {

  apiData:any;
  constructor(private data:UserdataService) {
    data.posts().subscribe((info:any)=>{
      this.apiData = info; 
    });
   }

  ngOnInit(): void {
  }

}
