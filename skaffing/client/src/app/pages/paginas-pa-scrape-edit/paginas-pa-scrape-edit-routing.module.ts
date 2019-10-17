import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginasPaScrapeEditComponent } from './paginas-pa-scrape-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PaginasPaScrapeEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasPaScrapeEditRoutingModule { }
