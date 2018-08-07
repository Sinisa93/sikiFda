import { TestBed, inject } from '@angular/core/testing';

import { RoomAvailabilityPeriodsDataService } from './room-availability-periods-data.service';

describe('RoomAvailabilityPeriodsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomAvailabilityPeriodsDataService]
    });
  });

  it('should be created', inject([RoomAvailabilityPeriodsDataService], (service: RoomAvailabilityPeriodsDataService) => {
    expect(service).toBeTruthy();
  }));
});
