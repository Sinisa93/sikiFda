import { RevenueAccountCategoriesModule } from './revenue-account-categories.module';

describe('RevenueAccountCategoriesModule', () => {
  let revenueAccountCategoriesModule: RevenueAccountCategoriesModule;

  beforeEach(() => {
    revenueAccountCategoriesModule = new RevenueAccountCategoriesModule();
  });

  it('should create an instance', () => {
    expect(revenueAccountCategoriesModule).toBeTruthy();
  });
});
