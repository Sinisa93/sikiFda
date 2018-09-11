import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAddOnsComponent } from './table-add-ons.component';

describe('TableAddOnsComponent', () => {
  let component: TableAddOnsComponent;
  let fixture: ComponentFixture<TableAddOnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAddOnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
