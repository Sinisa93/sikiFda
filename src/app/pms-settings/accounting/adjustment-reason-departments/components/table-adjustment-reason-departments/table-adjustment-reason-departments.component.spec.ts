import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdjustmentReasonDepartmentsComponent } from './table-adjustment-reason-departments.component';

describe('TableAdjustmentReasonDepartmentsComponent', () => {
  let component: TableAdjustmentReasonDepartmentsComponent;
  let fixture: ComponentFixture<TableAdjustmentReasonDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAdjustmentReasonDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAdjustmentReasonDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
