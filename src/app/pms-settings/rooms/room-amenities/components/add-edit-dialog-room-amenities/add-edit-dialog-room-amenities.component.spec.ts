import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDialogRoomAmenitiesComponent } from './add-edit-dialog-room-amenities.component';

describe('AddEditDialogRoomAmenitiesComponent', () => {
  let component: AddEditDialogRoomAmenitiesComponent;
  let fixture: ComponentFixture<AddEditDialogRoomAmenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDialogRoomAmenitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDialogRoomAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
