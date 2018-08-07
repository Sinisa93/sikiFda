import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRoomAmenitiesComponent } from './form-room-amenities.component';

describe('FormRoomAmenitiesComponent', () => {
  let component: FormRoomAmenitiesComponent;
  let fixture: ComponentFixture<FormRoomAmenitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRoomAmenitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRoomAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
