import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutchild2Component } from './aboutchild2.component';

describe('Aboutchild2Component', () => {
  let component: Aboutchild2Component;
  let fixture: ComponentFixture<Aboutchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aboutchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aboutchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
