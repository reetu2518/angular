import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { OnClickEventComponent } from './on-click-event/on-click-event.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsModule } from '@angular/forms';
import { UsdInrPipe } from './pipes/usd-inr.pipe';



@NgModule({
  declarations: [
    ForLoopComponent,
    OnClickEventComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    UsdInrPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    ForLoopComponent,
    OnClickEventComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent
  ]
})
export class PracticeModule { }
