import { TestBed, inject } from '@angular/core/testing';

import { RoomAvailabilityPeriodsService } from './room-availability-periods.service';

describe('RoomAvailabilityPeriodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomAvailabilityPeriodsService]
    });
  });

  it('should be created', inject([RoomAvailabilityPeriodsService], (service: RoomAvailabilityPeriodsService) => {
    expect(service).toBeTruthy();
  }));
});
