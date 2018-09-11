import { CreditCardPurgeModule } from './credit-card-purge.module';

describe('CreditCardPurgeModule', () => {
  let creditCardPurgeModule: CreditCardPurgeModule;

  beforeEach(() => {
    creditCardPurgeModule = new CreditCardPurgeModule();
  });

  it('should create an instance', () => {
    expect(creditCardPurgeModule).toBeTruthy();
  });
});
