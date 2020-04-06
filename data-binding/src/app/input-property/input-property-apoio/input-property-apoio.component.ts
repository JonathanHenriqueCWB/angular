import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-property-apoio',
  templateUrl: './input-property-apoio.component.html',
  styleUrls: ['./input-property-apoio.component.css']
})
export class InputPropertyApoioComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('nome') nomeCurso = '';

  constructor() { }

  ngOnInit(): void {
  }

}
