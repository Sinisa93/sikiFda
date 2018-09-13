import { TestBed, inject } from '@angular/core/testing';

import { AdjustmentReasonListsDataService } from './adjustment-reason-lists-data.service';

describe('AdjustmentReasonListsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdjustmentReasonListsDataService]
    });
  });

  it('should be created', inject([AdjustmentReasonListsDataService], (service: AdjustmentReasonListsDataService) => {
    expect(service).toBeTruthy();
  }));
});
