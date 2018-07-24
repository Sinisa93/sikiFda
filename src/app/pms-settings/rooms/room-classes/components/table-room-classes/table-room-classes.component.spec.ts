import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRoomClassesComponent } from './table-room-classes.component';

describe('TableRoomClassesComponent', () => {
  let component: TableRoomClassesComponent;
  let fixture: ComponentFixture<TableRoomClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRoomClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRoomClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
