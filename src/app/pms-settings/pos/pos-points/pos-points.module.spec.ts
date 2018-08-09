import { PosPointsModule } from './pos-points.module';

describe('PosPointsModule', () => {
  let posPointsModule: PosPointsModule;

  beforeEach(() => {
    posPointsModule = new PosPointsModule();
  });

  it('should create an instance', () => {
    expect(posPointsModule).toBeTruthy();
  });
});
