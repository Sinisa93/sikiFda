import { TestBed, inject } from '@angular/core/testing';

import { NightAuditSettingsService } from './night-audit-settings.service';

describe('NightAuditSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NightAuditSettingsService]
    });
  });

  it('should be created', inject([NightAuditSettingsService], (service: NightAuditSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
