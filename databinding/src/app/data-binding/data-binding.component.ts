import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  cursoAngular = true;
  urlImagem = 'https://cdn.pixabay.com/photo/2018/07/09/17/44/baby-elephant-3526681_960_720.png';
  valorAtual = '';
  valorSalvo;
  isMouseOver = false;
  public nome = 'abc';

  pessoa = {
    nome: 'asdf',
    idade: 20
  };

  getValor() {
    return 2;
  }
  getLikeCourse() {
    return true;
  }
  botaoClicado() {
    alert('botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log(evento);
    this.valorAtual = ((evento.target as HTMLInputElement).value);
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
