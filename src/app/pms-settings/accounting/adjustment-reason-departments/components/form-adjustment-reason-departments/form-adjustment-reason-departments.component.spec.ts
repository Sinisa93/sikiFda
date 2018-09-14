import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdjustmentReasonDepartmentsComponent } from './form-adjustment-reason-departments.component';

describe('FormAdjustmentReasonDepartmentsComponent', () => {
  let component: FormAdjustmentReasonDepartmentsComponent;
  let fixture: ComponentFixture<FormAdjustmentReasonDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAdjustmentReasonDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdjustmentReasonDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
