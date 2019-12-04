import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Array3Component } from './array3.component';

describe('Array3Component', () => {
  let component: Array3Component;
  let fixture: ComponentFixture<Array3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Array3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Array3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
