import { TestBed, inject } from '@angular/core/testing';

import { RevenueAccountingManagerService } from './revenue-accounting-manager.service';

describe('RevenueAccountingManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevenueAccountingManagerService]
    });
  });

  it('should be created', inject([RevenueAccountingManagerService], (service: RevenueAccountingManagerService) => {
    expect(service).toBeTruthy();
  }));
});
