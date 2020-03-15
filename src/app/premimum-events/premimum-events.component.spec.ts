import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremimuEventsComponent } from './premimu-events.component';

describe('PremimuEventsComponent', () => {
  let component: PremimuEventsComponent;
  let fixture: ComponentFixture<PremimuEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremimuEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremimuEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
