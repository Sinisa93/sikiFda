import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePosCategoriesComponent } from './table-pos-categories.component';

describe('TablePosCategoriesComponent', () => {
  let component: TablePosCategoriesComponent;
  let fixture: ComponentFixture<TablePosCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePosCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePosCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
