import { RevenueAccountingManagerModule } from './revenue-accounting-manager.module';

describe('RevenueAccountingManagerModule', () => {
  let revenueAccountingManagerModule: RevenueAccountingManagerModule;

  beforeEach(() => {
    revenueAccountingManagerModule = new RevenueAccountingManagerModule();
  });

  it('should create an instance', () => {
    expect(revenueAccountingManagerModule).toBeTruthy();
  });
});
