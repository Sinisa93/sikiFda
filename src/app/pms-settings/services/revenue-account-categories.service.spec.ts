import { TestBed, inject } from '@angular/core/testing';

import { RevenueAccountCategoriesService } from './revenue-account-categories.service';

describe('RevenueAccountCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevenueAccountCategoriesService]
    });
  });

  it('should be created', inject([RevenueAccountCategoriesService], (service: RevenueAccountCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
