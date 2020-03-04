import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // Variáveis e array
  nomePortal: string;
  cursos: string[] = ['Java' , 'JS' , 'Angular'];

  // Construtor
  constructor() {
    this.nomePortal = 'http://loiane.training';
  }

  ngOnInit(): void {
  }

}
