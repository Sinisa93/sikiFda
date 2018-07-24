import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPmsSettingsComponent } from './dashboard-pms-settings.component';

describe('DashboardPmsSettingsComponent', () => {
  let component: DashboardPmsSettingsComponent;
  let fixture: ComponentFixture<DashboardPmsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPmsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPmsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
