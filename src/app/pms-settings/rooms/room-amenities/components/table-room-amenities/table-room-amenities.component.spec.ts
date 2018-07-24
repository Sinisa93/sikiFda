import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRoomAmenitiesComponent } from './table-room-amenities.component';

describe('TableRoomAmenitiesComponent', () => {
  let component: TableRoomAmenitiesComponent;
  let fixture: ComponentFixture<TableRoomAmenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRoomAmenitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRoomAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
