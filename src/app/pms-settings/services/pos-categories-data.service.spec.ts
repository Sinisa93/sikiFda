import { TestBed, inject } from '@angular/core/testing';

import { PosCategoriesDataService } from './pos-categories-data.service';

describe('PosCategoriesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PosCategoriesDataService]
    });
  });

  it('should be created', inject([PosCategoriesDataService], (service: PosCategoriesDataService) => {
    expect(service).toBeTruthy();
  }));
});
