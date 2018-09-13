import { TestBed, inject } from '@angular/core/testing';

import { AdjustmentReasonListsService } from './adjustment-reason-lists.service';

describe('AdjustmentReasonListsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdjustmentReasonListsService]
    });
  });

  it('should be created', inject([AdjustmentReasonListsService], (service: AdjustmentReasonListsService) => {
    expect(service).toBeTruthy();
  }));
});
