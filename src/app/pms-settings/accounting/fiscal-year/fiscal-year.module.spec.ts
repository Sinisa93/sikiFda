import { FiscalYearModule } from './fiscal-year.module';

describe('FiscalYearModule', () => {
  let fiscalYearModule: FiscalYearModule;

  beforeEach(() => {
    fiscalYearModule = new FiscalYearModule();
  });

  it('should create an instance', () => {
    expect(fiscalYearModule).toBeTruthy();
  });
});
