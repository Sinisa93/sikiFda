import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreditCardTypesComponent } from './form-credit-card-types.component';

describe('FormCreditCardTypesComponent', () => {
  let component: FormCreditCardTypesComponent;
  let fixture: ComponentFixture<FormCreditCardTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCreditCardTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreditCardTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
