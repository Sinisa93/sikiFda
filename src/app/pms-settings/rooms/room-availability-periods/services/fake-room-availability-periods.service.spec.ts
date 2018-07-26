import { TestBed, inject } from '@angular/core/testing';

import { FakeRoomAvailabilityPeriodsService } from './fake-room-availability-periods.service';

describe('FakeRoomAvailabilityPeriodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeRoomAvailabilityPeriodsService]
    });
  });

  it('should be created', inject([FakeRoomAvailabilityPeriodsService], (service: FakeRoomAvailabilityPeriodsService) => {
    expect(service).toBeTruthy();
  }));
});
