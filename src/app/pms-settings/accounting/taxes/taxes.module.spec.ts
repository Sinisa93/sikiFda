import { TaxesModule } from './taxes.module';

describe('TaxesModule', () => {
  let taxesModule: TaxesModule;

  beforeEach(() => {
    taxesModule = new TaxesModule();
  });

  it('should create an instance', () => {
    expect(taxesModule).toBeTruthy();
  });
});
