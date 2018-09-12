import { TestBed, inject } from '@angular/core/testing';

import { CurrencyOptionsService } from './currency-options.service';

describe('CurrencyOptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyOptionsService]
    });
  });

  it('should be created', inject([CurrencyOptionsService], (service: CurrencyOptionsService) => {
    expect(service).toBeTruthy();
  }));
});
