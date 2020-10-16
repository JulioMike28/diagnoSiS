import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagnoseComponent } from './diagnose/diagnose.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ModalModule } from './_modal'


@NgModule({
  declarations: [
    AppComponent,
    DiagnoseComponent,
    HomeComponent,
    NavbarComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
