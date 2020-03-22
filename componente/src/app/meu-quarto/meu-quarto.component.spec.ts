import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuQuartoComponent } from './meu-quarto.component';

describe('MeuQuartoComponent', () => {
  let component: MeuQuartoComponent;
  let fixture: ComponentFixture<MeuQuartoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuQuartoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuQuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
