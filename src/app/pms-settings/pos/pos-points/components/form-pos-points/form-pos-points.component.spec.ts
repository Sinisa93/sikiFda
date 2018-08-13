import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPosPointsComponent } from './form-pos-points.component';

describe('FormPosPointsComponent', () => {
  let component: FormPosPointsComponent;
  let fixture: ComponentFixture<FormPosPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPosPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPosPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
