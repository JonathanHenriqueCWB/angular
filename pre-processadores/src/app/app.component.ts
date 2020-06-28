import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pre-processadores';
}

//Comando para mudar o padçao de extensao para scss
//ng config schematics.@schematics/angular:component.styleext scss
