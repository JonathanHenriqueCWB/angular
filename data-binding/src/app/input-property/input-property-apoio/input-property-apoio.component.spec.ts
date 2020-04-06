import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropertyApoioComponent } from './input-property-apoio.component';

describe('InputPropertyApoioComponent', () => {
  let component: InputPropertyApoioComponent;
  let fixture: ComponentFixture<InputPropertyApoioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPropertyApoioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropertyApoioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
