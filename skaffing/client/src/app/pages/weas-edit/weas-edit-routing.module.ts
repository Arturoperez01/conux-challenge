import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeasEditComponent } from './weas-edit.component';

const routes: Routes = [
  {
    path: '',
    component: WeasEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeasEditRoutingModule { }
