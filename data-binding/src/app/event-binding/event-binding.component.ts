import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;

  constructor() { }

  ngOnInit(): void {
  }

  botaoClicado() {
    alert('Apertou no botão');
  }

  onKeyUp( evento: KeyboardEvent ) {
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }

  salvarValor( valor ) {
    this.valorSalvo = valor;
  }

  onMouseOverOuto() {
    this.isMouseOver = !this.isMouseOver;
  }

}
