import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPosCategoriesComponent } from './form-pos-categories.component';

describe('FormPosCategoriesComponent', () => {
  let component: FormPosCategoriesComponent;
  let fixture: ComponentFixture<FormPosCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPosCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPosCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
