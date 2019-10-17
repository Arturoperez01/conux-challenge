import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeasListComponent } from './weas-list.component';
import { WeasListRoutingModule } from './weas-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    WeasListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    WeasListComponent
  ]
})
export class WeasListModule { }
