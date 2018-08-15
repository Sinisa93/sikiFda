import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRevenueAccountLabelsComponent } from './table-revenue-account-labels.component';

describe('TableRevenueAccountLabelsComponent', () => {
  let component: TableRevenueAccountLabelsComponent;
  let fixture: ComponentFixture<TableRevenueAccountLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRevenueAccountLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRevenueAccountLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
