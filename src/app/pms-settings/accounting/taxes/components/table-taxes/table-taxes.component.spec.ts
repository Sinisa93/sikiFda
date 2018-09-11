import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTaxesComponent } from './table-taxes.component';

describe('TableTaxesComponent', () => {
  let component: TableTaxesComponent;
  let fixture: ComponentFixture<TableTaxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTaxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
