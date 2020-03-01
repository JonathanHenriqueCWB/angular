import { Component, OnInit } from '@angular/core';

// Decorator com metadados
@Component({
  selector: 'app-primeiro-componente',
  // templateUrl: './primeiro-componente.component.html',
  template: ' <p>Meu primeiro componente em Angular</p> ',
  styleUrls: ['./primeiro-componente.component.css']
})

// Primeira classe
export class PrimeiroComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
