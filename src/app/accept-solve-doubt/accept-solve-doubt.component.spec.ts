import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptSolveDoubtComponent } from './accept-solve-doubt.component';

describe('AcceptSolveDoubtComponent', () => {
  let component: AcceptSolveDoubtComponent;
  let fixture: ComponentFixture<AcceptSolveDoubtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptSolveDoubtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptSolveDoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
