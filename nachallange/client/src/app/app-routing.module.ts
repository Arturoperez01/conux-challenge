import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  { path: '', redirectTo: '/', pathMatch: 'full'  },
  { path: '',  loadChildren: './pages/user.module#UserModule'},
]

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
