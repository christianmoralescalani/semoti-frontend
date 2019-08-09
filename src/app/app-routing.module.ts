import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent } from './componentes/login/login.component';
import { RegistrarseComponent } from './componentes/registrarse/registrarse.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { EstructurarComponent } from './componentes/estructurar/estructurar.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Registrarse', component: RegistrarseComponent },
  { path: 'Principal', component: PrincipalComponent },
  {path: 'Estructurar/:id', component: EstructurarComponent},
  {path: 'Busqueda', component: BusquedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
