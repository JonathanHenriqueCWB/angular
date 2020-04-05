import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  public input1 = 'S two-way data binding';
  public input2 = 'C two-way data binding';

  // tslint:disable-next-line: align
  public pessoa = {
    nome: 'Super Mario',
    idade: 29
  };

  constructor() { }

  ngOnInit(): void {
  }

}

/*
  Two-way data bindind e a associação tanto do template para o
  componente, quanto do componente para o template, utliza-se do
  banana in a box, uma sintaxe para essa associação
*/
