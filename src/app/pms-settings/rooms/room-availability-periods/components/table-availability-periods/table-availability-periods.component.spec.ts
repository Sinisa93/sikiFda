import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAvailabilityPeriodsComponent } from './table-availability-periods.component';

describe('TableAvailabilityPeriodsComponent', () => {
  let component: TableAvailabilityPeriodsComponent;
  let fixture: ComponentFixture<TableAvailabilityPeriodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAvailabilityPeriodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAvailabilityPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
