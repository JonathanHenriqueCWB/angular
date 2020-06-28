import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testando-lint',
  templateUrl: './testando-lint.component.html',
  styleUrls: ['./testando-lint.component.css']
})
export class TestandoLintComponent implements OnInit {

  nome: string;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Lint é usado para procurar por possiveis código fora do padão
   * não necessariamente erros, mais sim despadronização do style guide.
   * Comando: ng lint
   */

}
