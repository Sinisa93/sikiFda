import { RoomAmenitiesModule } from './room-amenities.module';

describe('RoomAmenitiesModule', () => {
  let roomAmenitiesModule: RoomAmenitiesModule;

  beforeEach(() => {
    roomAmenitiesModule = new RoomAmenitiesModule();
  });

  it('should create an instance', () => {
    expect(roomAmenitiesModule).toBeTruthy();
  });
});
