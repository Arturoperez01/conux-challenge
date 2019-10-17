import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginasPaScrapeEditComponent } from './paginas-pa-scrape-edit.component';
import { PaginasPaScrapeEditRoutingModule } from './paginas-pa-scrape-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PaginasPaScrapeEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PaginasPaScrapeEditComponent
  ]
})
export class PaginasPaScrapeEditModule { }
