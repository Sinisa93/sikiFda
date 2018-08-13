import { TestBed, inject } from '@angular/core/testing';

import { PosPointsDataService } from './pos-points-data.service';

describe('PosPointsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PosPointsDataService]
    });
  });

  it('should be created', inject([PosPointsDataService], (service: PosPointsDataService) => {
    expect(service).toBeTruthy();
  }));
});
