import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNightAuditSettingsComponent } from './form-night-audit-settings.component';

describe('FormNightAuditSettingsComponent', () => {
  let component: FormNightAuditSettingsComponent;
  let fixture: ComponentFixture<FormNightAuditSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNightAuditSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNightAuditSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
