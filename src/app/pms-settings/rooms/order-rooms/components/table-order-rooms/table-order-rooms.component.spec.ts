import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrderRoomsComponent } from './table-order-rooms.component';

describe('TableOrderRoomsComponent', () => {
  let component: TableOrderRoomsComponent;
  let fixture: ComponentFixture<TableOrderRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOrderRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOrderRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
