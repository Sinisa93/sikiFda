import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAvailabilityPeriodsComponent } from './form-availability-periods.component';

describe('FormAvailabilityPeriodsComponent', () => {
  let component: FormAvailabilityPeriodsComponent;
  let fixture: ComponentFixture<FormAvailabilityPeriodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAvailabilityPeriodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAvailabilityPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
