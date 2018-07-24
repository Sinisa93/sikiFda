import { TestBed, inject } from '@angular/core/testing';

import { FakeRoomAmenitiesService } from './fake-room-amenities.service';

describe('FakeRoomAmenitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeRoomAmenitiesService]
    });
  });

  it('should be created', inject([FakeRoomAmenitiesService], (service: FakeRoomAmenitiesService) => {
    expect(service).toBeTruthy();
  }));
});
