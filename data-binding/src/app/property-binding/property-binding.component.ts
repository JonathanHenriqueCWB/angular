import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public title: string;
  public message: string;
  public urlImage: string;

  constructor() {
    this.title = 'Property Binding';
    this.message = 'Property binding tambem é uma associação do componente para o template';
    this.urlImage = 'https://i.picsum.photos/id/1000/1000/300.jpg';
   }

  ngOnInit(): void {
  }

}
