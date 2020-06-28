import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteandoPreProcessadoresComponent } from './testeando-pre-processadores/testeando-pre-processadores.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteandoPreProcessadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
