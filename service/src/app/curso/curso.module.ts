import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoComponent } from './curso.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursoService } from './curso.service';

@NgModule({
  declarations: [
    CursoComponent, // Linha adicionada
    CursosDetalheComponent // Linha adicionada
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursoComponent // Linha adicionada
  ],
  providers: [
    CursoService // Linha adicionada
  ]
})
export class CursoModule { }
