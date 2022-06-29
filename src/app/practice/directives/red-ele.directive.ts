import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEle]'
})
export class RedEleDirective {

  constructor(ele:ElementRef) {
    ele.nativeElement.style.color = "red";
    ele.nativeElement.style.fontSize = "25px";
    ele.nativeElement.style.backgroundColor = "#ececec";
   }

}
