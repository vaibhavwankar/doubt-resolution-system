import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseDoubtComponent } from './raise-doubt.component';

describe('RaiseDoubtComponent', () => {
  let component: RaiseDoubtComponent;
  let fixture: ComponentFixture<RaiseDoubtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiseDoubtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseDoubtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
