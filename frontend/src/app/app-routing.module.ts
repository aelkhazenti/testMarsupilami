import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterComponent } from './components/ajouter/ajouter.component';
import { AmisComponent } from './components/amis/amis.component';
import { CarnetComponent } from './components/carnet/carnet.component';
import { LoginComponent } from './components/login/login.component';
import { MoncompteComponent } from './components/moncompte/moncompte.component';

const routes: Routes = [
  {path: 'register', component: AjouterComponent },
  {path: 'login', component: LoginComponent },
  {path: 'amis', component: AmisComponent },
  {path: 'moncompte', component: MoncompteComponent },
  {path:'',component:CarnetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
