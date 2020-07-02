import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildProducaoComponent } from './build-producao.component';

describe('BuildProducaoComponent', () => {
  let component: BuildProducaoComponent;
  let fixture: ComponentFixture<BuildProducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildProducaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
