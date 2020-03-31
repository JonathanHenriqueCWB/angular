import { Component, OnInit } from '@angular/core';

import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  // Variavel tipo string
  nomeComponente: string;
  // Array de cursos
  cursos: string[];

  // Construtor com injeção de dependencia
  constructor(private cursoService: CursoService) {
    this.nomeComponente = 'Cursos - Component';
    this.cursos = this.cursoService.getCursos();
   }

  ngOnInit(): void {
  }
}

/*
  Criar a classe de serviço ng g s curso/curso
  nesse caso será criado uma classe de serviço dentro
  do componente curso.

  Comfigurar o injeção de dependencia dentro do
  construtor do componente que ira utiliza-lo

  Configurar no modulo do componente o providers
  declarando o classe de serviço nele
*/
