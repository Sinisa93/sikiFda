import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddOnsComponent } from './form-add-ons.component';

describe('FormAddOnsComponent', () => {
  let component: FormAddOnsComponent;
  let fixture: ComponentFixture<FormAddOnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddOnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
