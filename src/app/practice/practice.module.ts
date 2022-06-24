import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { OnClickEventComponent } from './on-click-event/on-click-event.component';



@NgModule({
  declarations: [
    ForLoopComponent,
    OnClickEventComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ForLoopComponent,
    OnClickEventComponent
  ]
})
export class PracticeModule { }
