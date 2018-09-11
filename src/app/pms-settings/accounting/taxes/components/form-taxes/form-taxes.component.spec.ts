import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTaxesComponent } from './form-taxes.component';

describe('FormTaxesComponent', () => {
  let component: FormTaxesComponent;
  let fixture: ComponentFixture<FormTaxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTaxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
