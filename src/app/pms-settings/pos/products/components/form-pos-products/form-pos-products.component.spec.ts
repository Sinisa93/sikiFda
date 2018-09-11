import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPosProductsComponent } from './form-pos-products.component';

describe('FormPosProductsComponent', () => {
  let component: FormPosProductsComponent;
  let fixture: ComponentFixture<FormPosProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPosProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPosProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
