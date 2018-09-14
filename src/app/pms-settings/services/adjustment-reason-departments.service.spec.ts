import { TestBed, inject } from '@angular/core/testing';

import { AdjustmentReasonDepartmentsService } from './adjustment-reason-departments.service';

describe('AdjustmentReasonDepartmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdjustmentReasonDepartmentsService]
    });
  });

  it('should be created', inject([AdjustmentReasonDepartmentsService], (service: AdjustmentReasonDepartmentsService) => {
    expect(service).toBeTruthy();
  }));
});
