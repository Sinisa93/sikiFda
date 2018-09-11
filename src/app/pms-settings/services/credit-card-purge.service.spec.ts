import { TestBed, inject } from '@angular/core/testing';

import { CreditCardPurgeService } from './credit-card-purge.service';

describe('CreditCardPurgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditCardPurgeService]
    });
  });

  it('should be created', inject([CreditCardPurgeService], (service: CreditCardPurgeService) => {
    expect(service).toBeTruthy();
  }));
});
