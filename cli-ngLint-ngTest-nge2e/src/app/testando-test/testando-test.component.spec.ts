import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestandoTestComponent } from './testando-test.component';

describe('TestandoTestComponent', () => {
  let component: TestandoTestComponent;
  let fixture: ComponentFixture<TestandoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestandoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestandoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
