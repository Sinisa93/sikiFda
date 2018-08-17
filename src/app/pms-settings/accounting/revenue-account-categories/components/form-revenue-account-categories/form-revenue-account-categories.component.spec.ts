import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRevenueAccountCategoriesComponent } from './form-revenue-account-categories.component';

describe('FormRevenueAccountCategoriesComponent', () => {
  let component: FormRevenueAccountCategoriesComponent;
  let fixture: ComponentFixture<FormRevenueAccountCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRevenueAccountCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRevenueAccountCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
