import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [
    CursosComponent, // Linha adicionada
    CursoDetalheComponent // Linha adicionada
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent // Linha adicionada
  ]
})
export class CursosModule { }

/*
  Criar o componente que utilizara o modulo proprio
  ng g c cursos, irá criar um componente de nome cursos

  Criar um sub-componente que servira somente para o componente
  com modulo prorprio (opcional), caso queira ter sub-component,
  nesse caso curso-detalher servira para o mesmo.

  Criar o modulo junto ao componente de origem
  ng g m cursos/cursos, nesse caso irá criar um modulo
  dentro do componente cursos de nome cursos

  Declara nas declaraões (declaratios) do modulo criado
  os componentes desse modulo, nesse exemplo CursosComponent
  e CursoDetalheComponent.

  Declara em exports os componentes que serão visivel para
  o modulo principal, e/ou outros modulos.

  Por ultimo importar (imports) o modulo criado para poder utiliza-lo
*/
