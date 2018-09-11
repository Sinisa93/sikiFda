import { TestBed, inject } from '@angular/core/testing';

import { CreditCardTypesService } from './credit-card-types.service';

describe('CreditCardTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditCardTypesService]
    });
  });

  it('should be created', inject([CreditCardTypesService], (service: CreditCardTypesService) => {
    expect(service).toBeTruthy();
  }));
});
