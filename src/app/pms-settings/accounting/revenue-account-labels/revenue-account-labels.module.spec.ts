import { RevenueAccountLabelsModule } from './revenue-account-labels.module';

describe('RevenueAccountLabelsModule', () => {
  let revenueAccountLabelsModule: RevenueAccountLabelsModule;

  beforeEach(() => {
    revenueAccountLabelsModule = new RevenueAccountLabelsModule();
  });

  it('should create an instance', () => {
    expect(revenueAccountLabelsModule).toBeTruthy();
  });
});
