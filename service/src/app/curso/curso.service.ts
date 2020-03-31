import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }

  getCursos() {
    return ['HTML', 'CSS', 'Javascript', 'C#', '.Net Core', 'REST'];
  }
}
