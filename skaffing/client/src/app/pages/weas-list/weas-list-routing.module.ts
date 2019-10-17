import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeasListComponent } from './weas-list.component';

const routes: Routes = [
  {
    path: '',
    component: WeasListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeasListRoutingModule { }
