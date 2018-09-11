import { RevenueAccountRulesModule } from './revenue-account-rules.module';

describe('RevenueAccountRulesModule', () => {
  let revenueAccountRulesModule: RevenueAccountRulesModule;

  beforeEach(() => {
    revenueAccountRulesModule = new RevenueAccountRulesModule();
  });

  it('should create an instance', () => {
    expect(revenueAccountRulesModule).toBeTruthy();
  });
});
