import { TestBed, inject } from '@angular/core/testing';

import { AdjustmentReasonDepartmentsDataService } from './adjustment-reason-departments-data.service';

describe('AdjustmentReasonDepartmentsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdjustmentReasonDepartmentsDataService]
    });
  });

  it('should be created', inject([AdjustmentReasonDepartmentsDataService], (service: AdjustmentReasonDepartmentsDataService) => {
    expect(service).toBeTruthy();
  }));
});
