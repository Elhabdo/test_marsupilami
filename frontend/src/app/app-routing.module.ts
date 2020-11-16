import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterComponent } from './components/ajouter/ajouter.component';
import { CarnetComponent } from './components/carnet/carnet.component';

const routes: Routes = [
  {path: 'add', component: AjouterComponent },
  {path:'',component:CarnetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
