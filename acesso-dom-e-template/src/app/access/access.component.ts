import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  valorInicial = 0;

  // Acessando componente DOM do template
  @ViewChild('campoInput', {static: false}) campoValorInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  somar() {
    this.campoValorInput.nativeElement.value++;
    console.log(this.campoValorInput);
  }
  subtrair() {
    this.campoValorInput.nativeElement.value--;
    console.log(this.campoValorInput);
  }

}
