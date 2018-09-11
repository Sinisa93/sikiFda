import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRevenueAccountRulesComponent } from './table-revenue-account-rules.component';

describe('TableRevenueAccountRulesComponent', () => {
  let component: TableRevenueAccountRulesComponent;
  let fixture: ComponentFixture<TableRevenueAccountRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRevenueAccountRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRevenueAccountRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
