import { TestBed, inject } from '@angular/core/testing';

import { RevenueAccountCategoriesDataService } from './revenue-account-categories-data.service';

describe('RevenueAccountCategoriesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevenueAccountCategoriesDataService]
    });
  });

  it('should be created', inject([RevenueAccountCategoriesDataService], (service: RevenueAccountCategoriesDataService) => {
    expect(service).toBeTruthy();
  }));
});
