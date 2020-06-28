import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteandoPreProcessadoresComponent } from './testeando-pre-processadores.component';

describe('TesteandoPreProcessadoresComponent', () => {
  let component: TesteandoPreProcessadoresComponent;
  let fixture: ComponentFixture<TesteandoPreProcessadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteandoPreProcessadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteandoPreProcessadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
