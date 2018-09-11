import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreditCardPurgeComponent } from './form-credit-card-purge.component';

describe('FormCreditCardPurgeComponent', () => {
  let component: FormCreditCardPurgeComponent;
  let fixture: ComponentFixture<FormCreditCardPurgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCreditCardPurgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreditCardPurgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
