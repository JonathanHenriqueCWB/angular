import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestandoE2eComponent } from './testando-e2e.component';

describe('TestandoE2eComponent', () => {
  let component: TestandoE2eComponent;
  let fixture: ComponentFixture<TestandoE2eComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestandoE2eComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestandoE2eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
