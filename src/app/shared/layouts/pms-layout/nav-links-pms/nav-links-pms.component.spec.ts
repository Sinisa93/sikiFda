import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinksPmsComponent } from './nav-links-pms.component';

describe('NavLinksPmsComponent', () => {
  let component: NavLinksPmsComponent;
  let fixture: ComponentFixture<NavLinksPmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLinksPmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLinksPmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
