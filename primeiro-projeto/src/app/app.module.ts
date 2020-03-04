import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importando modulo from 'nomeComponente/nomeArquivo'
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [ // IMPORTE DE COMPONENTES, DIRETIVAS E PIPES
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
  ],
  imports: [ // IMPORT DE MODULOS EXTERNOS IRAO AQUI
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
