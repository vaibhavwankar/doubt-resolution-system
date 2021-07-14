import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveDoubtComponent } from './solve-doubt.component';

describe('SolveDoubtComponent', () => {
  let component: SolveDoubtComponent;
  let fixture: ComponentFixture<SolveDoubtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolveDoubtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolveDoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
