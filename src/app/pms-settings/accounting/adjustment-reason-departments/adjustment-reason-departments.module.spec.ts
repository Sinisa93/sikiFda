import { AdjustmentReasonDepartmentsModule } from './adjustment-reason-departments.module';

describe('AdjustmentReasonDepartmentsModule', () => {
  let adjustmentReasonDepartmentsModule: AdjustmentReasonDepartmentsModule;

  beforeEach(() => {
    adjustmentReasonDepartmentsModule = new AdjustmentReasonDepartmentsModule();
  });

  it('should create an instance', () => {
    expect(adjustmentReasonDepartmentsModule).toBeTruthy();
  });
});
