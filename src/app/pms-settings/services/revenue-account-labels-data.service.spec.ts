import { TestBed, inject } from '@angular/core/testing';

import { RevenueAccountLabelsDataService } from './revenue-account-labels-data.service';

describe('RevenueAccountLabelsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevenueAccountLabelsDataService]
    });
  });

  it('should be created', inject([RevenueAccountLabelsDataService], (service: RevenueAccountLabelsDataService) => {
    expect(service).toBeTruthy();
  }));
});
