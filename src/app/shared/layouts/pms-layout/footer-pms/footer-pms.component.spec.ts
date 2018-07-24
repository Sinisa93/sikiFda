import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPmsComponent } from './footer-pms.component';

describe('FooterPmsComponent', () => {
  let component: FooterPmsComponent;
  let fixture: ComponentFixture<FooterPmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
