import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestandoLintComponent } from './testando-lint.component';

describe('TestandoLintComponent', () => {
  let component: TestandoLintComponent;
  let fixture: ComponentFixture<TestandoLintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestandoLintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestandoLintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
