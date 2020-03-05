import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // Variáveis e array
  nomePortal: string;
  cursos: string[];

  // Construtor com injeção de dependencia
  constructor(private cursoService: CursosService) {

    this.nomePortal = 'http://loiane.training';
    this.cursos = this.cursoService.getCursos();

  }

  ngOnInit(): void {
  }

}

/*Classes de serviços são utilizadas para se conectar ao servidor
  Para se conectar no servidor existe um objeto chamado http
*/
