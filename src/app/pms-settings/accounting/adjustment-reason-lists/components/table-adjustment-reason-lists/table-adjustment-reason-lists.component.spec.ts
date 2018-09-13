import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdjustmentReasonListsComponent } from './table-adjustment-reason-lists.component';

describe('TableAdjustmentReasonListsComponent', () => {
  let component: TableAdjustmentReasonListsComponent;
  let fixture: ComponentFixture<TableAdjustmentReasonListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAdjustmentReasonListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAdjustmentReasonListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
