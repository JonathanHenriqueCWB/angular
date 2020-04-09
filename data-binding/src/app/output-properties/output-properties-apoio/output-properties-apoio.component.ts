import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-properties-apoio.component.html',
  styleUrls: ['./output-properties-apoio.component.css']
})
export class OutputPropertiesApoioComponent implements OnInit {

  /* Anotaão input e output deixa a variavel ou evento
   Visivel para classe pai diretamente na tag de seletor */
  @Input() public valor = 0;
  @Output() mudarValor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    this.valor++;
    this.mudarValor.emit({novoValor: this.valor});
  }

  decrementar() {
    this.valor--;
    this.mudarValor.emit({novoValor: this.valor});
  }
}
