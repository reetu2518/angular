import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { OnClickEventComponent } from './on-click-event/on-click-event.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RedEleDirective } from './directives/red-ele.directive';
import { AppRoutingModule } from '../app-routing.module';
import { GetAPIComponent } from './get-api/get-api.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ForLoopComponent,
    OnClickEventComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    UsdInrPipe,
    FormsComponent,
    RedEleDirective,
    GetAPIComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [
    ForLoopComponent,
    OnClickEventComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    FormsComponent,
    RedEleDirective,
    GetAPIComponent,
  ],
})
export class PracticeModule {}
