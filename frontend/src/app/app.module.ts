import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarnetComponent } from './components/carnet/carnet.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AjouterComponent } from './components/ajouter/ajouter.component';
import { LoginComponent } from './components/login/login.component';
import { Globals } from './services/globals';
import { AmisComponent } from './components/amis/amis.component';
import { MoncompteComponent } from './components/moncompte/moncompte.component';

@NgModule({
  declarations: [ 
    AppComponent,
    CarnetComponent,
    NavbarComponent,
    AjouterComponent,
    LoginComponent,
    AmisComponent,
    MoncompteComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
