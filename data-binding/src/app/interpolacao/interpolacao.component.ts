import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  templateUrl: './interpolacao.component.html',
  styleUrls: ['./interpolacao.component.css']
})
export class InterpolacaoComponent implements OnInit {

  public title: string;
  public message: string;

  constructor() {
    this.title = 'Interpolation/Interpolação';
    this.message = 'A interpolação e a associação de um valor feita do componente para o template';
   }

   getValor(){
     return 2 + 2;
   }

  ngOnInit(): void {
  }

}
