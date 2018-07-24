import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDialogAvailabilityPeriodsComponent } from './add-edit-dialog-availability-periods.component';

describe('AddEditDialogAvailabilityPeriodsComponent', () => {
  let component: AddEditDialogAvailabilityPeriodsComponent;
  let fixture: ComponentFixture<AddEditDialogAvailabilityPeriodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDialogAvailabilityPeriodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDialogAvailabilityPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
