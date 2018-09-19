import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRevenueAccountingManagerComponent } from './table-revenue-accounting-manager.component';

describe('TableRevenueAccountingManagerComponent', () => {
  let component: TableRevenueAccountingManagerComponent;
  let fixture: ComponentFixture<TableRevenueAccountingManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRevenueAccountingManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRevenueAccountingManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
