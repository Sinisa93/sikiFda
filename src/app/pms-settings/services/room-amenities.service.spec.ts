import { TestBed, inject } from '@angular/core/testing';

import { RoomAmenitiesService } from './room-amenities.service';

describe('RoomAmenitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomAmenitiesService]
    });
  });

  it('should be created', inject([RoomAmenitiesService], (service: RoomAmenitiesService) => {
    expect(service).toBeTruthy();
  }));
});
