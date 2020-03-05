import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [ // IMPORTS DOS COMPONETES
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ // PARA PODER EXPOR ESSA CLASSE PARA OUTRO COMPONENTE
    CursosComponent
  ],
  providers: [ // IMPORTS DOS SERVICE
    CursosService
  ]
})
export class CursosModule { }
