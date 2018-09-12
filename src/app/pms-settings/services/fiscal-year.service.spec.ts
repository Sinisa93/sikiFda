import { TestBed, inject } from '@angular/core/testing';

import { FiscalYearService } from './fiscal-year.service';

describe('FiscalYearService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiscalYearService]
    });
  });

  it('should be created', inject([FiscalYearService], (service: FiscalYearService) => {
    expect(service).toBeTruthy();
  }));
});
