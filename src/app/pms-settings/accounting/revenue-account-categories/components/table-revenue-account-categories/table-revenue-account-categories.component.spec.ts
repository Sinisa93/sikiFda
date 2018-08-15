import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRevenueAccountCategoriesComponent } from './table-revenue-account-categories.component';

describe('TableRevenueAccountCategoriesComponent', () => {
  let component: TableRevenueAccountCategoriesComponent;
  let fixture: ComponentFixture<TableRevenueAccountCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRevenueAccountCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRevenueAccountCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
