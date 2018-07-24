import { RoomAvailabilityPeriodsModule } from './room-availability-periods.module';

describe('RoomAvailabilityPeriodsModule', () => {
  let roomAvailabilityPeriodsModule: RoomAvailabilityPeriodsModule;

  beforeEach(() => {
    roomAvailabilityPeriodsModule = new RoomAvailabilityPeriodsModule();
  });

  it('should create an instance', () => {
    expect(roomAvailabilityPeriodsModule).toBeTruthy();
  });
});
