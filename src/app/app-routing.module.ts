import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './practice/forms/forms.component';
import { PipesComponent } from './practice/pipes/pipes.component';

const routes: Routes = [
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
