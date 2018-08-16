import { TestBed, inject } from '@angular/core/testing';

import { RevenueAccountLabelsService } from './revenue-account-labels.service';

describe('RevenueAccountLabelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevenueAccountLabelsService]
    });
  });

  it('should be created', inject([RevenueAccountLabelsService], (service: RevenueAccountLabelsService) => {
    expect(service).toBeTruthy();
  }));
});
