import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "Nested Loop";

  users = [
    {name : "abc", email : "test@gamil.com", mobile : 989898, hobby : ['a', 'b', 'c']},
    {name : "abcd", email : "test@gasamil.com", mobile : 2423, hobby : ['d', 'e', 'c']},
    {name : "adc", email : "test@gamasdil.com", mobile : 2342, hobby : ['h', 'gb', 'f']}
  ];

}
