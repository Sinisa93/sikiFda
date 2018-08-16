import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRevenueAccountLabelsComponent } from './form-revenue-account-labels.component';

describe('FormRevenueAccountLabelsComponent', () => {
  let component: FormRevenueAccountLabelsComponent;
  let fixture: ComponentFixture<FormRevenueAccountLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRevenueAccountLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRevenueAccountLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
