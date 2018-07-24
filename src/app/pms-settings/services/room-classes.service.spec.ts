import { TestBed, inject } from '@angular/core/testing';

import { RoomClassesService } from './room-classes.service';

describe('RoomClassesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomClassesService]
    });
  });

  it('should be created', inject([RoomClassesService], (service: RoomClassesService) => {
    expect(service).toBeTruthy();
  }));
});
