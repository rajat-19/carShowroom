import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Array4Component } from './array4.component';

describe('Array4Component', () => {
  let component: Array4Component;
  let fixture: ComponentFixture<Array4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Array4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Array4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
