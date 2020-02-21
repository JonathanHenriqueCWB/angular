import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {

  /* variavel typescript */
  numero: number;

  constructor() { }

  ngOnInit(): void {
  }

  obterNumero(n: number){
    this.numero = n;
  }

}
