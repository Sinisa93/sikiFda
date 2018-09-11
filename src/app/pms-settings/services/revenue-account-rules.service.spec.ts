import { TestBed, inject } from '@angular/core/testing';

import { RevenueAccountRulesService } from './revenue-account-rules.service';

describe('RevenueAccountRulesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevenueAccountRulesService]
    });
  });

  it('should be created', inject([RevenueAccountRulesService], (service: RevenueAccountRulesService) => {
    expect(service).toBeTruthy();
  }));
});
