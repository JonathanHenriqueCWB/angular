import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  @Input() valorInicial = 10;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges( changes: SimpleChanges ) {
    /*for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`propName: currentValue = cur, previousValue = prev`);
    }*/
  }

  /* tslint:disable-next-line: adjacent-overload-signatures
  ngOnInit() {

  }*/

}

/*  Eventos life cycle hooks

    ngOnchanges -  antes #2 e quando valor property-binding é atualizado
    ngOnInit - quando componente é inicializado
    ngDoCheck - a cada ciclo de verificação
    ngAfterContentInit - depois de inserir conteúdo externo na view
    ngAfterContentChecked - a cada verificação de conteúdo inserido
    ngAfterViewChecked - a cada verificação de conteúdo/conteúdo filho
    ngOnDestroy - antes da diretiva/component ser destruido
*/
