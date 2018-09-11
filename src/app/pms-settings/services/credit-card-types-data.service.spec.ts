import { TestBed, inject } from '@angular/core/testing';

import { CreditCardTypesDataService } from './credit-card-types-data.service';

describe('CreditCardTypesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditCardTypesDataService]
    });
  });

  it('should be created', inject([CreditCardTypesDataService], (service: CreditCardTypesDataService) => {
    expect(service).toBeTruthy();
  }));
});
