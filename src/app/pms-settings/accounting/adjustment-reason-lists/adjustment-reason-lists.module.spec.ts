import { AdjustmentReasonListsModule } from './adjustment-reason-lists.module';

describe('AdjustmentReasonListsModule', () => {
  let adjustmentReasonListsModule: AdjustmentReasonListsModule;

  beforeEach(() => {
    adjustmentReasonListsModule = new AdjustmentReasonListsModule();
  });

  it('should create an instance', () => {
    expect(adjustmentReasonListsModule).toBeTruthy();
  });
});
