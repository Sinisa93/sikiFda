import { CreditCardTypesModule } from './credit-card-types.module';

describe('CreditCardTypesModule', () => {
  let creditCardTypesModule: CreditCardTypesModule;

  beforeEach(() => {
    creditCardTypesModule = new CreditCardTypesModule();
  });

  it('should create an instance', () => {
    expect(creditCardTypesModule).toBeTruthy();
  });
});
