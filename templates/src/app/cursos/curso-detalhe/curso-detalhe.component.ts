import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  nomeComponente: string;
  listaCursos: string[] = ['HTML', 'CSS', 'Javascript', 'C#', '.Net Core', 'Asp.Net Core'];

  constructor() {
    this.nomeComponente = 'Lista de cursos';
   }

  ngOnInit(): void {
  }

}
