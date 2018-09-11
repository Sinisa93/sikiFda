import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCreditCardTypesComponent } from './table-credit-card-types.component';

describe('TableCreditCardTypesComponent', () => {
  let component: TableCreditCardTypesComponent;
  let fixture: ComponentFixture<TableCreditCardTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCreditCardTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCreditCardTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
