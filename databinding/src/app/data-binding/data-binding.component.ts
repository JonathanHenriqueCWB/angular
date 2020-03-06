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

  getValor() {
    return 2;
  }
  getLikeCourse(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
