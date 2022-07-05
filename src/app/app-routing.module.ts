import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ForLoopComponent } from './practice/for-loop/for-loop.component';
import { FormsComponent } from './practice/forms/forms.component';
import { OnClickEventComponent } from './practice/on-click-event/on-click-event.component';
import { ParentComponent } from './practice/parent/parent.component';
import { PipesComponent } from './practice/pipes/pipes.component';

const routes: Routes = [
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
    children: [
      {
        path: 'loop',
        component: ForLoopComponent,
      },
      {
        path: 'parent',
        component: ParentComponent,
      },
    ],
  },
  {
    path: 'onclickevent/:id',
    component: OnClickEventComponent,
  },
  // {
  //   path: '**',
  //   component: NoPageComponent,
  // },
  {
    path : "admin", loadChildren:()=>import("./admin/admin.module").then(mod=>mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
