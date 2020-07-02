import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalandoBootstrapComponent } from './instalando-bootstrap.component';

describe('InstalandoBootstrapComponent', () => {
  let component: InstalandoBootstrapComponent;
  let fixture: ComponentFixture<InstalandoBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalandoBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalandoBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
