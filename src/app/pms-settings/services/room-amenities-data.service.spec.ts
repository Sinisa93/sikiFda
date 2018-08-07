import { TestBed, inject } from '@angular/core/testing';

import { RoomAmenitiesDataService } from './room-amenities-data.service';

describe('RoomAmenitiesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomAmenitiesDataService]
    });
  });

  it('should be created', inject([RoomAmenitiesDataService], (service: RoomAmenitiesDataService) => {
    expect(service).toBeTruthy();
  }));
});
