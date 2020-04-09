import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropertiesApoioComponent } from './output-properties-apoio.component';

describe('OutputPropertiesApoioComponent', () => {
  let component: OutputPropertiesApoioComponent;
  let fixture: ComponentFixture<OutputPropertiesApoioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPropertiesApoioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropertiesApoioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
