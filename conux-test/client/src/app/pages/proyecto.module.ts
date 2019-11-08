import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProyectoRoutingModule } from './proyecto-routing.module';
//import { SharedModule } from '../../../shared/shared.module';
import { ProyectoComponent } from './proyecto.component';
import { ProyectoService } from '../_services/Proyecto.service';
import { MaterialModule } from '../material.module';


@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ProyectoRoutingModule,
    FormsModule
    //SharedModule
  ],
  declarations: [
    ProyectoComponent
  ],
  providers: [
    ProyectoService
  ]
})
export class ProyectoModule { }
