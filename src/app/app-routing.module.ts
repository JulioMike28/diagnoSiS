import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiagnoseComponent } from './diagnose/diagnose.component';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'diagnose', component: DiagnoseComponent},
  {path:'resultado', component:ResultadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
