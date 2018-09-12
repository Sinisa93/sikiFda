import { NightAuditSettingsModule } from './night-audit-settings.module';

describe('NightAuditSettingsModule', () => {
  let nightAuditSettingsModule: NightAuditSettingsModule;

  beforeEach(() => {
    nightAuditSettingsModule = new NightAuditSettingsModule();
  });

  it('should create an instance', () => {
    expect(nightAuditSettingsModule).toBeTruthy();
  });
});
