import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePosProductsComponent } from './table-pos-products.component';

describe('TablePosProductsComponent', () => {
  let component: TablePosProductsComponent;
  let fixture: ComponentFixture<TablePosProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePosProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePosProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
