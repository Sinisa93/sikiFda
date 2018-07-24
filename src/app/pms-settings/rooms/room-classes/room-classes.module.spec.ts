import { RoomClassesModule } from './room-classes.module';

describe('RoomClassesModule', () => {
  let roomClassesModule: RoomClassesModule;

  beforeEach(() => {
    roomClassesModule = new RoomClassesModule();
  });

  it('should create an instance', () => {
    expect(roomClassesModule).toBeTruthy();
  });
});
