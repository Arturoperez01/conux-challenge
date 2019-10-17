import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeasEditComponent } from './weas-edit.component';
import { WeasEditRoutingModule } from './weas-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    WeasEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    WeasEditComponent
  ]
})
export class WeasEditModule { }
