import { TestBed, inject } from '@angular/core/testing';

import { PosPointsService } from './pos-points.service';

describe('PosPointsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PosPointsService]
    });
  });

  it('should be created', inject([PosPointsService], (service: PosPointsService) => {
    expect(service).toBeTruthy();
  }));
});
