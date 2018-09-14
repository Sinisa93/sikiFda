import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdjustmentReasonListsComponent } from './form-adjustment-reason-lists.component';

describe('FormAdjustmentReasonListsComponent', () => {
  let component: FormAdjustmentReasonListsComponent;
  let fixture: ComponentFixture<FormAdjustmentReasonListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAdjustmentReasonListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdjustmentReasonListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
