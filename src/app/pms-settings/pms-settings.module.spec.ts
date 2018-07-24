import { PmsSettingsModule } from './pms-settings.module';

describe('PmsSettingsModule', () => {
  let pmsSettingsModule: PmsSettingsModule;

  beforeEach(() => {
    pmsSettingsModule = new PmsSettingsModule();
  });

  it('should create an instance', () => {
    expect(pmsSettingsModule).toBeTruthy();
  });
});
